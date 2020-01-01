import React from 'react'

const Text = props => {
    const getYearsFromBirthday = function () {
        let today = new Date()
        return today.getMonth() <= 9 && today.getDate() < 6 ? today.getFullYear() - 2000 : today.getFullYear() - 1999 
    }

    return (
    <div className={props.className}>
        <h1>Hei!</h1>
        <p>Jeg heter Jonathan Brooks, er {getYearsFromBirthday()} år og studerer Informatikk ved NTNU i Trondheim.</p> 
        <p>På fritiden liker jeg å kode på diverse småprosjekter, bli med på CTF konkurranser og hjelpe til der jeg kan i Linjeforeningen Online.</p>
        <p>Mine favo</p>
    </div>
    )
}

export default Text;