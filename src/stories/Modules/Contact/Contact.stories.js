import React from 'react';
import Contact from '../../../Modules/Contact/Contact';

export default {
    title: 'Modules/Contact',
    component: Contact,
};

const Template = args => <Contact {...args} />;

export const Contact1 = Template.bind({});
Contact1.args = {
    backgroundColor: "rgb(33, 146, 255)",
    color: "white"
}