export const Person = () => {
    return (
        <div>
            <img src={personImage} alt="person image"/>
            <div>
                <h1>Liu Yifei</h1>
                <p><span>Date of birth:</span> 25.09.1987</p>
                <p><span>Place of birth:</span> Wuhan, Hubei, China</p>
                <p>Liu Yifei was born in Wuhan, Hubei, Province of China on August 
                    25th, 1987. She began modeling at the age of 8 and was trained 
                    in singing, dancing and the piano. Moving to the United States 
                    at 10 with her mother, Liu lived there for four years.</p>
            </div>
        </div>
    );
};

export default Person;