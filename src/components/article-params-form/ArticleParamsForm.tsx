import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useRef, useState, useEffect } from 'react';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import {
	fontSizeOptions,
	fontFamilyOptions,
	ArticleStateType,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import { Separator } from '../separator';
type Props = {
	onSubmit: (settings: Partial<ArticleStateType>) => void;
	onReset: () => void;
};
export const ArticleParamsForm = (props: Props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	console.log(isMenuOpen);
	let className = styles.container;
	if (isMenuOpen) {
		className = className + ' ' + styles.container_open;
	}
	const [selectedFontSize, setSelectedFontSize] = useState(fontSizeOptions[0]);
	const [selectedFont, setSelectedFont] = useState(fontFamilyOptions[0]);
	const [seletedFontColors, setSelectedFontColors] = useState(fontColors[0]);
	const [selectedBackgroundColors, setSelectedBackgroundColors] = useState(
		backgroundColors[0]
	);
	const [seletedContentWidthArr, setSelectedContentWidthArr] = useState(
		contentWidthArr[0]
	);

	const toolTipRef = useRef<HTMLFormElement | null>(null);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				toolTipRef.current &&
				!toolTipRef.current.contains(event.target as HTMLElement)
			) {
				setIsMenuOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<>
			<ArrowButton
				isOpen={isMenuOpen}
				onClick={() => {
					if (isMenuOpen) {
						setIsMenuOpen(false);
					} else {
						setIsMenuOpen(true);
					}
				}}
			/>
			<aside className={className}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						props.onSubmit({
							fontFamilyOption: selectedFont,
							fontSizeOption: selectedFontSize,
							fontColor: seletedFontColors,
							backgroundColor: selectedBackgroundColors,
							contentWidth: seletedContentWidthArr,
						});
						e.preventDefault();
					}}
					onReset={() => {
						props.onReset();
						setSelectedFont(fontFamilyOptions[0]);
						setSelectedFontSize(fontSizeOptions[0]);
						setSelectedFontColors(fontColors[0]);
						setSelectedBackgroundColors(backgroundColors[0]);
						setSelectedContentWidthArr(contentWidthArr[0]);
					}}
					ref={toolTipRef}>
					<Text weight={800} size={31}>
						Задайте параметры
					</Text>
					<Select
						selected={selectedFont}
						options={fontFamilyOptions}
						title='шрифт'
						onChange={setSelectedFont}
					/>

					<RadioGroup
						title='размер шрифта'
						name='font size'
						selected={selectedFontSize}
						options={fontSizeOptions}
						onChange={(option) => {
							console.log(option);
							setSelectedFontSize(option);
						}}
					/>
					<Select
						selected={seletedFontColors}
						options={fontColors}
						title='цвет шрифта'
						onChange={setSelectedFontColors}
					/>
					<Separator />
					<Select
						selected={selectedBackgroundColors}
						options={backgroundColors}
						title='цвет фона'
						onChange={setSelectedBackgroundColors}
					/>
					<Select
						selected={seletedContentWidthArr}
						options={contentWidthArr}
						title='ширина контента'
						onChange={setSelectedContentWidthArr}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
