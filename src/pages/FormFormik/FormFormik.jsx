import { Form, Formik, Field, ErrorMessage } from "formik";

export default function FormFormik() {
    const handleValidate = (values) => {
        const errors = {};
        if(!values.fullName.trim()){
            errors.fullName = "Please enter name"

        }

        if (!values.email) {
            errors.email = "Required field";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Wrong format number(example: example@mail.com)";
        }

        if (!values.password) {
            errors.password = "Required field";
        } else if (values.password.length < 8) {
            errors.password = "Password should have not less than 8 symbols";
        } else if (!/(?=.*[0-9])/.test(values.password)) {
            errors.password = "Password should have min 1 figure";
        }

        if (!values.phone) {
            errors.phone = "Required field";
        } else if (!/^\+?3?8?(0\d{9})$/.test(values.phone)) {
            errors.phone = "Wrong format number(example: +380991234567)";
        }

        return errors
    }
    const handleSubmit = (values) => {
        console.log("Sending data...", values)
    }
    return (
        <>
            <h1>Regular Formik</h1>
            <Formik
                initialValues={{
                    fullName: "",
                    email: "",
                    password: "",
                    phone: "",
                    course: "frontend",
                    level: "beginner",
                    format: "online",
                    wantsCertificate: false,
                    merch: [],
                    comment: ""}}
                validate={handleValidate}
                onSubmit={handleSubmit}

                >
                {({
                    values,
                    errors,
                    touched}) => {
                    console.log(values, errors, touched)
                    return(
                        <Form style={{display:"flex", flexDirection:"column"}}>
                            <Field
                                id="fullName"
                                type="text"
                                name="fullName"
                                placeholder="Enter full name"
                            />
                            <ErrorMessage name="fullName">
                                {(message) => <p style={{color:"red"}}>{message}</p> }
                            </ErrorMessage>
                            <Field
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Enter email"
                            />
                            <ErrorMessage name="email">
                                {(message) => <p style={{color:"red"}}>{message}</p> }
                            </ErrorMessage>
                            <Field
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                            />
                            <ErrorMessage name="password">
                                {(message) => <p style={{color:"red", background: "yellow"}}>{message}</p> }
                            </ErrorMessage>
                            <Field
                                id="phone"
                                type="text"
                                name="phone"
                                placeholder="Enter phone number"
                            />
                            <ErrorMessage name="phone">
                                {(message) => <p style={{color:"red", background: "orange", fontWeight: "bold"}}>{message}</p> }
                            </ErrorMessage>
                            <Field
                                as="select"
                                id="course"
                                name="course"
                            >
                                <option value="frontend">Frontend</option>
                                <option value="react">React</option>
                                <option value="node">Node.js</option>
                                <option value="fullstack">Fullstack</option>
                            </Field>
                            <label>
                                <Field
                                    type="radio"
                                    name="level"
                                    value="middle"
                                />
                                All I know
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="level"
                                    value="advanced"
                                />
                                Advanced
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="format"
                                    value="online"
                                />
                                Online
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="format"
                                    value="offline"
                                />
                                Offline
                            </label>
                            <label>
                                <Field
                                    type="checkbox"
                                    name="wantsCertificate"
                                />
                                I need certificate
                            </label>
                            <h2>Merch:</h2>
                            <label>
                                <Field
                                    type="checkbox"
                                    name="merch"
                                    value="t-shirt"
                                />
                                T-shirt
                            </label>
                            <label>
                                <Field
                                    type="checkbox"
                                    name="merch"
                                    value="notebook"
                                />
                                Notebook
                            </label>
                            <label>
                                <Field
                                    type="checkbox"
                                    name="merch"
                                    value="sticker"
                                />
                                Sticker
                            </label>
                                <Field
                                    as="textarea"
                                    id="comment"
                                    name="comment"
                                    placeholder="Comment"
                                />
                            <button type="submit">Create order</button>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}

