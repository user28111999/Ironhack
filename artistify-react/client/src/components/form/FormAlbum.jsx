import { useEffect, useState } from "react";
import APIHandler from "../../api/APIHandler";
import "./../../styles/form.css";
import "./../../styles/icon-avatar.css";

const FormAlbum = (props) => {
	const [title, setTitle] = useState("")
	const [artists, setArtists] = useState([])
	const [labels, setLabels] = useState([])
	const [artist, setArtist] = useState("")
	const [label, setLabel] = useState("")
	const [releaseDate, setReleaseDate] = useState("")
	const [description, setDescription] = useState("")

	useEffect(() => {
		APIHandler
			.get("/artists")
			.then((res) => setArtists(res.data.artists))
			.catch(err => console.error(err))

		APIHandler
			.get("/labels")
			.then((res) => setLabels(res.data.labels))
			.catch(err => console.error(err))
	}, [])
	
	useEffect(() => {
		if (props.mode === "edit") {
			APIHandler
				.get(`/albums/${props._id}`)
				.then((res) => {
					console.log(res.data)
					setTitle(res.data.title)
					setReleaseDate(res.data.releaseDate)
					setDescription(res.data.description)
					setArtist(res.data.artist._id)
					setLabel(res.data.label._id)
				})
				.catch(err => console.error(err))
		}
	}, [props.mode, props._id])

	const handleName = e => setTitle(e.target.value)
	const handleDate = e => setReleaseDate(e.target.value)
	const handleDesc = e => setDescription(e.target.value)
	const handleLabl = e => setLabel(e.target.value)
	const handleArti = e => setArtist(e.target.value)

	const handleSubmit = async (e) => {
		e.preventDefault()

		const formData = new FormData()
		formData.append("title", title)
		formData.append("artist", artist)
		formData.append("label", label)
		formData.append("releaseDate", releaseDate)
		formData.append("description", description)

		try {
			if (props.mode === "create") {
				APIHandler.post("/albums", formData)
			} else {
				APIHandler.patch(`/albums/${props.match.params.id}`)
			}
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<>
			<h1 className="title diy">D.I.Y (FormAlbum)</h1>
			<form className="form" onSubmit={handleSubmit}>
				<label htmlFor="title">Title</label>
				<input 
					type="text" 
					name="title"
					value={title}
					onChange={handleName} 
				/>

				<label htmlFor="artist">Artist</label>
				<select name="artist" onChange={handleArti}>
					{artists.map((artist, i) => (
						<option 
							value={artist._id}
							key={i}
						>{artist.name}</option>
					))}
				</select>

				<label htmlFor="label">Label</label>
				<select name="label" onChange={handleLabl}>
					{labels.map((label, i) => (
						<option 
							value={label._id}
							key={i}
						>{label.name}</option>
					))}
				</select>

				<label htmlFor="releaseDate">Release date</label>
				<input 
					type="date" 
					name="releaseDate"
					value={new Date(releaseDate)}
					onChange={handleDate}
				/>

				<label htmlFor="description">Description</label>
				<textarea 
					name="description"
					value={description}
					onChange={handleDesc}
				></textarea>

				<button>Submit</button>

			</form>
		</>
	);
};

export default FormAlbum;
