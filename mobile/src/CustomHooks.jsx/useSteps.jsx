import React, { useState } from "react";

export const useSteps = () => {

    const [steps, setSteps] = useState(0)
    const [imgSource, setImgSource] = useState(require('../images/welcome1.png'))



    return {
        steps, setSteps, imgSource, setImgSource
    }
}