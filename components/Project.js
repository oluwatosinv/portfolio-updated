import React, { useEffect } from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import H3 from "@material-tailwind/react/Heading3";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Project(props) {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

  return (
        <div data-aos={props.animate} className='mt-10'>
                <a href={props.link} target="_blank">
                <Card>
                    <CardImage
                        src={props.src}
                        alt="Card Image"
                    />

                    <CardBody>
                        <h3 className='text-center text-3xl mb-4'>{props.title}</h3>
                        <p className='text-green-600'>{props.subTitle}</p>
                        <Paragraph color="gray">
                            {props.body}
                        </Paragraph>
                    </CardBody>
                </Card>
            </a>
        </div>
  );
}
