import { Fragment, memo } from 'react';

const MainComponent = () => {
	const makeLog = () => console.log('hi from MainComponent');

	return (
		<Fragment>
			<ChildComponent makeLog={makeLog} />
		</Fragment>
	);
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
	<button onClick={makeLog}>say Hi from ChildComponent</button>
));

// Проблема в том, что мы пытаемся передать стрел. функцию как пропс для мемо компонента. Функция всегда передается ссылкой, т.к это объект
// первого класса. Т.е каждый раз при ре-рендере создается и передается новая ссылка. Чтобы это исправить, нужно использовать хук useCallback.
// Решение будет выглядеть так:

import { useCallback } from 'react';
import { Fragment, memo } from 'react';

const MainComponent2 = () => {
    const makeLog = useCallback(() => console.log('hi from MainComponent'), [])

	return (
		<Fragment>
			<ChildComponent makeLog={makeLog} />
		</Fragment>
	);
};

// memoized component
const ChildComponent2 = memo(({ makeLog }) => (
	<button onClick={makeLog}>say Hi from ChildComponent</button>
));

// Т.к внутри функции отсутсвуют зависимости, параметр зависимостей оставляем пустым массивом.