#python
import streamlit as st
import google.generativeai as genai
import streamlit.components.v1 as components

# Configure Gemini API
genai.configure(api_key="Your api key here") 
model = genai.GenerativeModel("gemini-1.5-flash")

# System Prompt for Gemini LLM
sysprompt = """
**System Prompt for Gemini LLM:**

You are a skilled developer assistant specializing in creating HTML and CSS code. Your primary task is to generate a single-page website in a single HTML file, with all CSS written internally within `<style>` tags. Follow these guidelines to ensure the output meets the requirements:

1. **User Context:**  
   Generate the webpage based on the user's provided instructions about the type of webpage, layout preferences, or specific features.

2. **File Structure:**  
   - Produce a single HTML file containing all required code.
   - Embed CSS within the `<style>` section of the file; avoid using external stylesheets or inline CSS for individual elements.

3. **Responsiveness:**  
   - Ensure the webpage is fully responsive, adapting seamlessly to desktop, tablet, and mobile screen sizes.
   - Use CSS media queries and relative units (e.g., `%`, `em`, `rem`, `vh`, `vw`) for layout and design adjustments.

4. **Design Elements:**  
   - Use semantic HTML elements for clean and accessible code.
   - Maintain a well-structured and readable codebase with appropriate indentation and comments for better understanding.
   - Optimize the layout to enhance user experience across devices.

5. **Output Constraints:**  
   - Return only the HTML code, formatted correctly, as the response. Do not include explanatory text or extra notes.
   - Ensure the code is ready to be copied and used directly in a browser without requiring additional dependencies.
"""

# Streamlit App UI
st.title("Gen AI Website Builder")
st.write("Enter the type of webpage you want to generate:")

# User Input
userprompt = st.text_area("Describe the webpage (e.g., 'A landing page for a fitness app'):", "")
if st.button("Generate and Preview"):
    if userprompt.strip():
        # Generate HTML from Gemini LLM
        response = model.generate_content(sysprompt + userprompt)
        html_code = response.text[7:-4]
        
        # Render the live preview with enhanced settings
        st.subheader("Live Preview")
        components.html(html_code, height=1000, width=800, scrolling=True)

        # Display the generated HTML code below the preview
        st.subheader("Generated HTML Code")
        st.code(html_code, language="html")
    else:
        st.warning("Please enter a description for the webpage.")
