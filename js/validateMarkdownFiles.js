const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const grayMatter = require("gray-matter");

function validateMarkdownFiles() {
    const mdFilesDir = '../tts.gsa.gov/pages/jointts/positions/'; // Directory with markdown files
    const mdFiles = fs.readdirSync(mdFilesDir).filter(file => file.endsWith('.md') && file !== 'position-template.md'); // Skip 'position-template.md'

    const schemaPath = '../tts.gsa.gov/_schemas/job-posting.json'; // Path to schema

    mdFiles.forEach(file => {
        const filePath = path.join(mdFilesDir, file);
        console.log(`Validating ${filePath}...`);

        try {
        // Read and parse the markdown file's front matter and content
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const parsed = grayMatter(fileContent);
        
        // Convert the front matter into a JSON object
        const dataToValidate = parsed.data;

        // Ensure the properties match the expected structure

        // Ensure tags is an array
        if (typeof dataToValidate.tags === 'string') {
            dataToValidate.tags = [dataToValidate.tags]; // Convert string to array
        }

        // Ensure key_objectives is an array of objects with title and items
        if (Array.isArray(dataToValidate.key_objectives)) {
            dataToValidate.key_objectives = dataToValidate.key_objectives.map(obj => {
            if (!obj.items) {
                obj.items = [];
            }
            return obj;
            });
        }

        // Ensure date fields are in correct format
        const dateFields = ['opens', 'closes', 'updated'];
        dateFields.forEach(field => {
            if (dataToValidate[field]) {
            const date = new Date(dataToValidate[field]);
            dataToValidate[field] = date.toISOString().split('T')[0]; // Convert to YYYY-MM-DD
            }
        });

        // Format the date in info_sessions to only keep the date part (YYYY-MM-DD)
        if (Array.isArray(dataToValidate.info_sessions)) {
            dataToValidate.info_sessions.forEach(session => {
            if (session.date) {
                const date = new Date(session.date);
                session.date = date.toISOString().split('T')[0]; // Keep only YYYY-MM-DD
            }
            });
        }

        // Set the permalink field based on the title field (lowercase and replace spaces with dashes)
        if (dataToValidate.title) {
            const permalink = `/join/${dataToValidate.title.toLowerCase().replace(/\s+/g, '-').replace(':', '')}.html`;
            dataToValidate.permalink = permalink;
        }

        // Create temporary JSON for validation
        const tempJsonPath = '../tts.gsa.gov/temp.json';
        fs.writeFileSync(tempJsonPath, JSON.stringify(dataToValidate, null, 2));

        // Run v8r validation
        execSync(`npx v8r --schema ${schemaPath} ${tempJsonPath}`, { stdio: 'inherit' });

        // Clean up temporary JSON file after validation
        fs.unlinkSync(tempJsonPath);
        } catch (error) {
        console.error(`Validation failed for ${filePath}: ${error.message}`);
        }
    });
}

module.exports = {
    validateMarkdownFiles
};
  