import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;
export type ArrowButtonProps = {
	isOpen: boolean;
	onClick: OnClick;
};
export const ArrowButton = (props: ArrowButtonProps) => {
	const { onClick } = props;
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			onClick={() => onClick()}
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={styles.container}>
			<img src={arrow} alt='иконка стрелочки' className={styles.arrow} />
		</div>
	);
};
