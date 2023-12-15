import { useEffect, useState } from 'react';

const Skills = () => {
    const [skillData, setSkillData] = useState([]);

    useEffect(() => {
        fetch('fake_data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSkillData(data);
            })


    }, [])


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-7xl gap-5 mx-auto my-5'>
            {
                skillData.map(item => <div key={item.id}>
                    <div className='flex flex-row p-2   border'>

                        <img className='w-[70px] h-[70px] mr-5' src={item.image} alt="" />
                        <div className='w-[100%]'>
                            <h1 className='text-2xl'>{item.title}</h1>
                            <progress className="progress progress-accent" value="70" max="100"></progress>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Skills;