import { useEffect, useState } from "react"
import APIHandler from "../../api/APIHandler";
import "./../../styles/form.css"

const FormArtist = (props) => {
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [isBand, setIsBand] = useState(false)
	const [styles, setStyles] = useState([])

	useEffect(() => {
		APIHandler
			.get("http://localhost:4000/styles")
			.then((res) => setStyles(res.data.styles))
			.catch(err => console.error(err))
	}, [])

	const handleName = e => setName(e.target.value)
	const handleDesc = e => setDescription(e.target.value)
	const handleIsBand = e => setIsBand(e.target.value)

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (props.mode === "create") {
			APIHandler
			.post("/artists", {
				name,
				description,
				isBand
			})
			.then((res) => console.log(res))
			.catch((err) => console.error(err))
		}
	}

	return (
		<>
			<h1 className="title diy">D.I.Y (FormArtist)</h1>
			<form 
				className="form"
				onSubmit={handleSubmit}
			>
				<label className="row label" htmlFor="name">Name</label>
				<input 
					type="text" 
					name="name"
					value={name}
					onChange={handleName}
				/>
				<label className="row label" htmlFor="description">Description</label>
				<textarea 
					type="text" 
					name="description"
					value={description}
					onChange={handleDesc} 
				/>
				<label className="row label" htmlFor="isBand">Band?</label>
				<input 
					type="checkbox" 
					name="isBand"
					value={isBand}
					onChange={handleIsBand} 
				/>
				<label className="row label" htmlFor="styles">Styles</label>
				<select name="styles">
					{styles.map((style, i) => (
						<option value={i}>{style.name}</option>
					))}
				</select>
				<button>Submit</button>
			</form>
			<hr />
		</>
	);
};

export default FormArtist;
