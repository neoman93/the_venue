import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MyButton from "../Utils/MyButton";

const Discount = () => {
	const end = 30;
	const [start, setStart] = useState(0);
	const percentage = () => {
		if (start < end) {
			setStart((prevCount) => prevCount + 1);
		}
	};

	useEffect(() => {
		if (start > 0 && start < 30) {
			setTimeout(() => {
				setStart((prevCount) => prevCount + 1);
			}, 30);
		}
	}, [start]);

	return (
		<div className="center_wrapper">
			<div className="discount_wrapper">
				<Fade
					onVisibilityChange={(inView) => {
						if (inView) {
							percentage();
						}
					}}
				>
					<div className="discount_percentage">
						<span>{start}%</span>
						<span>OFF</span>
					</div>
				</Fade>
				<Slide right>
					<div className="discount_description">
						<h3>Purchase ticket before 20th September</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid dolor
							repellat laborum aspernatur in. Assumenda saepe excepturi culpa aliquid non,
							id magnam laboriosam tenetur possimus at, consectetur pariatur amet!
						</p>
						<MyButton
							text="Purchase tickets"
							link="http://google.com"
							size="small"
							style={{ background: "#ffa800", color: "#ffffff" }}
							iconTicket={true}
						/>
					</div>
				</Slide>
			</div>
		</div>
	);
};

export default Discount;
