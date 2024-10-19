import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
// import { RadioGroup } from '../radio-group';

export const ArticleParamsForm = () => {
	return (
		<>
			<ArrowButton isOpen={false} onClick={() => {}} />
			<aside className={styles.container}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<h1></h1>
						<form></form>
						<select></select>
						{/* <RadioGroup
						title=''
						name=''
						selected={}
						/> */}
						<select></select>
						<select></select>
						<select></select>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
