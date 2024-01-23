import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	as: "button";
	type?: JSX.IntrinsicElements["button"]["type"];
}

interface NavigationLinkProps extends LinkProps {
	as?: "link";
	to: string;
}

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	as: "a";
}

type ButtonOrLinkProps = {
	variant: "primary" | "secondary";
	children: ReactNode;
	className?: string;
} & (ButtonProps | NavigationLinkProps | AnchorProps);

const Button = (props: ButtonOrLinkProps) => {
	const btnStyle = props.variant === "primary" ? "bg-[#0072f8]" : "bg-[#e5e7eb]";

	if (props.as === "button") {
		const buttonProps: Partial<ButtonOrLinkProps> = { ...props };
		const buttonType = buttonProps.type || "button";
		delete buttonProps.variant;
		delete buttonProps.as;

		return (
			<button type={buttonType} className={`${btnStyle} ${props.className}`} {...buttonProps}>
				{props.children}
			</button>
		);
	}

	if (props.as === "link") {
		const linkProps: Partial<ButtonOrLinkProps> = { ...props };
		delete linkProps.variant;
		delete linkProps.as;

		return (
			<Link to={props.to} className={`${btnStyle} cursor-pointer`} {...linkProps}>
				{props.children}
			</Link>
		);
	}

	const anchorProps: Partial<ButtonOrLinkProps> = { ...props };
	delete anchorProps.variant;
	delete anchorProps.as;

	return (
		<a className={btnStyle} {...anchorProps}>
			{props.children}
		</a>
	);
};

export default Button;
