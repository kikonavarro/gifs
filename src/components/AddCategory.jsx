import { useState } from "react";
import { GifGrid } from "./GifGrid";

export const AddCategory = () => {
	const [categories, setCategories] = useState(["One Punch"]);
	const [inputValue, setInputValue] = useState([]);

	const onAddCategory = () => {
		if (categories.includes(inputValue)) return;
		setCategories([inputValue, ...categories]);
	};

	// desestructuramos el target, antes era event.target
	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return;
		onAddCategory();
		setInputValue("");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="One Punch"
					value={inputValue}
					onChange={onInputChange}
				/>
			</form>
			<ul>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ul>
		</>
	);
};
