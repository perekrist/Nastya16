import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import nastya from '../img/nastya16.jpeg';
import bike from '../img/bike.jpeg';
import dog from '../img/dog.jpeg';
import inst from '../img/inst.jpeg';
import multi from '../img/multi.jpeg';
import plane from '../img/plane.jpeg';
import sit from '../img/sit.jpeg';
import smile from '../img/smile.jpeg';


import './Nastya.css';

const Nastya = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				<Icon24Back/>
			</HeaderButton>}
		>
			Happy Birthday to Nastya!
		</PanelHeader>
		❤ ❤ ❤ Пусть тебя закружит счастье! ❤ ❤ ❤ 
		<img className="Nastya" src={nastya} alt="Nastya is 16!"/>
		<img className="Nastya" src={bike} alt="Nastya is 16!"/>
		<img className="Nastya" src={dog} alt="Nastya is 16!"/>
		<img className="Nastya" src={inst} alt="Nastya is 16!"/>
		<img className="Nastya" src={multi} alt="Nastya is 16!"/>
		<img className="Nastya" src={plane} alt="Nastya is 16!"/>
		<img className="Nastya" src={sit} alt="Nastya is 16!"/>
		<img className="Nastya" src={smile} alt="Nastya is 16!"/>
	</Panel>
);

Nastya.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Nastya;
