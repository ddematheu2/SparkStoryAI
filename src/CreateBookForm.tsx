import React from 'react';
import './Join.css';
import { useForm } from "react-hook-form";
import { BookCreator } from './utils';

interface CreateBookFormProps {
    setUser: Function;
}

function CreateBookForm(props:CreateBookFormProps) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<BookCreator>();

    async function onSubmit(data:BookCreator) {
        props.setUser(data);
    }
  
    return (
    <>
      <div className='Join'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='card m-5'>
                <h5 className="card-header">Tell us about the story you want to create:</h5>
                <div className="card-body border-bottom">
                    <div className="input-group">
                        <span className="input-group-text">What is the name of the main character?</span>
                        <input {...register('main_character_name')} required type="text" aria-label="Name" className="form-control" />
                    </div>
                    <br />
                    <div className="input-group">
                        <span className="input-group-text">What gender is the main character?</span>
                        <select {...register('main_character_gender')} required className="form-select" aria-label="select gender">
                            <option disabled selected value="">Choose Gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-text">What is the age of the main character?</span>
                        <input {...register('main_character_age')} required type="text" aria-label="Age" className="form-control"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-text">Describe in a sentence or two the main character:</span>
                        <textarea {...register('main_character_description')} required aria-label="Main character description" className="form-control" rows={3}/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-text">Are there any other characters you want us to include?</span>
                        <textarea {...register('other_characters')} required aria-label="Other characters" className="form-control" rows={3}/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-text">Where does the story take place?</span>
                        <input {...register('setting')} required type="text" aria-label="Setting for story" className="form-control"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-text">Describe in a sentence or two the plot of the story:</span>
                        <textarea {...register('plot_details')} required aria-label="Plot for story" className="form-control" rows={3}/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-text">Any moral to the story?</span>
                        <textarea {...register('story_learnings')} required aria-label="Story moral" className="form-control" rows={3}/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-text">What art style should the illustrations be in?</span>
                        <input {...register('art_style')} required type="text" aria-label="Story art style" className="form-control"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <button className="btn btn-primary" type="submit">Generate story!</button>
                    </div>
                </div>
            </div>
        </form>
      </div>
    </>
    );
}

export default CreateBookForm;