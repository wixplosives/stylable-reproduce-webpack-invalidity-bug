### Steps to reproduce

1. clone and run `npm i`
2. run `npm start`
3. app should render with red background
4. uncomment line 5 in `base.st.css` and save the file, this breaks the syntax
5. errors should be displayed
6. recomment line 5 (fixing the break) and save the file
7. change is picked up, but `app.st.css` and `header.st.css` are not updated, and retain their old diagnostics until a change revalidates the file

> note: whether `app.st.css` imports/extends `header.st.css` file seems to make no big difference to this issue
