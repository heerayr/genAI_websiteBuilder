# Gen AI Website Builder  

An intuitive web application powered by Google's Gemini AI that generates responsive HTML websites from text descriptions.
Overview
Gen AI Website Builder is a Streamlit-based application that leverages Google's Gemini 1.5 Flash model to transform natural language descriptions into fully functional, responsive HTML websites. Users simply describe the website they want, and the AI generates complete HTML and CSS code in seconds, along with a live preview.

## **Features**  
Generate custom single-page websites based on user input. 
AI-Powered Website Generation: Transform text descriptions into complete HTML/CSS code
Live Preview: Instantly see how your generated website looks
Single-File Output: All HTML and CSS contained in one file for easy deployment
Responsive Design: Generated websites adapt to all screen sizes
Code Access: Copy the generated code for further customization

Installation
Prerequisites

Python 3.7+
pip package manager

Setup

Clone the repository:
bashCopygit clone https://github.com/yourusername/genai-website-builder.git
cd genai-website-builder

Create and activate a virtual environment (optional but recommended):
bashCopypython -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

Install the required dependencies:
bashCopypip install -r requirements.txt

Create a .env file in the project root directory and add your Google API key:
CopyGOOGLE_API_KEY=your_api_key_here

Usage

Run the Streamlit application:
bashCopystreamlit run app.py

Open your web browser and navigate to http://localhost:8501
Enter a description of the website you want to create in the text area
Click "Generate and Preview" to see your website come to life
Copy the generated code for use in your projects

Technical Details

Framework: Streamlit for the UI
AI Model: Google's Gemini 1.5 Flash
System Prompt: Customized to generate semantic, responsive HTML/CSS
Output Format: Single HTML file with embedded CSS

Limitations

The application requires an active internet connection to access the Gemini API
Complex interactive features like JavaScript functionality may be limited
Generated designs are based on the AI's training data and may need customization

DEMO LINK:
https://www.linkedin.com/posts/heera-yr_genai-webdevelopment-ai-activity-7281652847912329216-_iLf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADe7_2kBzye6irSlm8ugl3cfh48S3LVyWxU
