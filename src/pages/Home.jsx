import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Corousel from '../components/Corousel'
import Golden from '../components/Golden-about'
import Location from '../components/Location'
export default function Home() {
    return (
        <div>
            <Header />
                <Corousel/>
                <Golden/>
                <Location/>
                <Card heading="The Golden" subHeading="Destination" buttonText="Discover more" imgURL="./Destination.webp"/>
                <Card heading="The Golden" subHeading="Choice" buttonText="Discover more"  imgURL="./Choice.webp"/>
                <Card heading="The Golden" subHeading="Address" buttonText="Discover more" imgURL="./add-ress.webp"/>
                <Card heading="The Golden" subHeading="Drive" buttonText="Discover more" imgURL="./golden-drive.webp"/>
                <Card heading="The Golden" subHeading="Landmark" buttonText="Discover more" imgURL="./Land-mark.webp"/>
                <Card heading="The Golden" subHeading="Ecosystem" buttonText="Discover more" imgURL="./Ecosystem.webp"/>


            <Footer />
        </div>
    )
}
