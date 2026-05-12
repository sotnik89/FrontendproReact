import {useState} from "react";

export default function FormRegular() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        course: "frontend",
        level: "beginner",
        format: "online",
        wantsCertificate: false,
        merch: [],
        comment: ""
    })

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        if (type === "checkbox" && name === "merch") {
            setFormData(prevFormData => {
                if (checked) {
                    return {
                        ...prevFormData,
                        merch: [...prevFormData.merch, value]
                    }
                }
                return {
                    ...prevFormData,
                    merch: prevFormData.merch.filter(item => item !== value),
                }
            });
            return;
        }
        if(type === "checkbox"){
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name]: checked,
                }
            });
            return;
        }
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Sending data...", formData
        )
    }
    return (
        <>
            <h1>Regular form</h1>
            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
                <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    placeholder="Enter full name"
                    onChange={handleChange}
                />
                <input
                    id="email"
                    type="text"
                    name="email"
                    value={formData.email}
                    placeholder="Enter email"
                    onChange={handleChange}
                />
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Enter password"
                    onChange={handleChange}
                />
                <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    placeholder="Enter phone number"
                    onChange={handleChange}
                />
                <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                >
                    <option value="frontend">Frontend</option>
                    <option value="react">React</option>
                    <option value="node">Node.js</option>
                    <option value="fullstack">Fullstack</option>
                </select>

                <label>
                    <input
                        type="radio"
                        name="level"
                        value="middle"
                        checked={formData.level === "middle"}
                        onChange={handleChange}
                    />
                    All I know
                </label>

                <label>
                    <input
                        type="radio"
                        name="level"
                        value="advanced"
                        checked={formData.level === "advanced"}
                        onChange={handleChange}
                    />
                    Advanced
                </label>

                <label>
                    <input
                        type="radio"
                        name="format"
                        value="online"
                        checked={formData.format === "online"}
                        onChange={handleChange}
                    />
                    Online
                </label>
                <label>
                    <input
                        type="radio"
                        name="format"
                        value="offline"
                        checked={formData.format === "offline"}
                        onChange={handleChange}
                    />
                    Offline
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="wantsCertificate"
                        checked={formData.wantsCertificate}
                        onChange={handleChange}
                    />
                    I need certificate
                </label>

                <h2>Merch:</h2>
                <label>
                    <input
                        type="checkbox"
                        name="merch"
                        value="t-shirt"
                        checked={formData.merch.includes("t-shirt")}
                        onChange={handleChange}
                    />
                    T-shirt
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="merch"
                        value="notebook"
                        checked={formData.merch.includes("notebook")}
                        onChange={handleChange}
                    />
                    Notebook
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="merch"
                        value="sticker"
                        checked={formData.merch.includes("sticker")}
                        onChange={handleChange}
                    />
                    Sticker
                </label>

                <label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                    />
                    Comment
                </label>
                <button type="submit">Create order</button>
            </form>
        </>
    )
}

