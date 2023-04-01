import React, { useState } from 'react';
import TaskWithSentens from '../../TaskWithSentens';
import Container from '../../Container';

import sentens from '../../../words/sentens';

const Sentens = () => {
    const sentensSort = [...sentens].sort(() => Math.random() - 0.5);

    return (

        <TaskWithSentens sentensSort={sentensSort} />

    );
};

export default Sentens;