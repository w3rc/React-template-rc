import React, { useState } from 'react';
import { Input, TextArea } from '../../../styles/shared/shared.styled';
import { Button, FlexColumn, VerticalGap } from "styles/globals";
import { CREATE_PROJECT_MUTATIONS } from "../../../apollo/mutations/add-project/addProject";
import { useMutation } from "@apollo/client";


const CreateProject: React.FC = () => {

     const [name, setName] = useState<string>("");
     const [tags, setTags] = useState<string>("");
     const [description, setDescription] = useState<any>("");
     const [ownerEmail, setownerEmail] = useState<any>("");
     const [freelancerType, setfreelancerType] = useState<string>("");
     const [minBudget, setminBudget] = useState<any>("");
     const [maxBudget, setmaxBudget] = useState<any>("");
     const [budgetCurrency, setbudgetCurrency] = useState<string>("");
     const [duration, setDuration] = useState<any>("");
     const [category, setCategory] = useState<any>("");
     const [requiredStars, setRequiredStars] = useState<any>("");
     const [requiredSkills, setRequiredSkills] = useState<string>("");

     const [createProject, { error }] = useMutation(CREATE_PROJECT_MUTATIONS);

     const addProject = (e: any) => {
          e.preventDefault();
          createProject({
               variables: {
                    name: name,
                    tags: tags,
                    description: description,
                    ownerEmail: ownerEmail,
                    freelancerType: freelancerType,
                    minBudget: minBudget,
                    maxBudget: maxBudget,
                    budgetCurrency: budgetCurrency,
                    duration: duration,
                    category: category,
                    requiredStars: requiredStars,
                    requiredSkills: requiredSkills
               },
          });

          if (error) {
               console.log(error);
          }
     };



     return (
          <FlexColumn style={{ flex: 0.7 }}>
               <VerticalGap gap={20} />
               <h2>Create Project</h2>
               <VerticalGap gap={10} />
               <form>
                    <h6>Project Name</h6>
                    <Input
                         type="name"
                         placeholder="Project Name"
                         value={name}
                         onChange={e => setName(e.target.value)}
                    />

                    <VerticalGap gap={10} />
                    <h6>Tags</h6>
                    <Input
                         type="tags"
                         placeholder="tags"
                         value={tags}
                         onChange={e => setTags(e.target.value)}
                    />

                    <VerticalGap gap={10} />
                    <h6>Description</h6>
                    <TextArea
                         name="desription"
                         placeholder="Description"
                         value={description}
                         onChange={e => setDescription(e.target.value)}
                    />

                    <VerticalGap gap={10} />
                    <h6> Email </h6>
                    <Input
                         name="ownerEmail"
                         placeholder="Owner Email"
                         value={ownerEmail}
                         onChange={e => setownerEmail(e.target.value)}
                    />

                    <VerticalGap gap={10} />
                    <h6> Freelancer Type </h6>
                    <Input
                         name="freelancerType"
                         placeholder="Freelancer Type"
                         value={freelancerType}
                         onChange={e => setfreelancerType(e.target.value)}
                    />

                    <VerticalGap gap={10} />
                    <h6> Minimum Budget </h6>
                    <Input
                         name="minBudget"
                         placeholder="Min Budget"
                         value={minBudget}
                         onChange={e => setminBudget(e.target.value)}
                    />

                    <VerticalGap gap={10} />
                    <h6> Maximum Budget </h6>
                    <Input
                         name="maxBudget"
                         placeholder="Max Budget"
                         value={maxBudget}
                         onChange={e => setmaxBudget(e.target.value)}
                    />

                    <VerticalGap gap={10} />
                    <h6> Budget Currency </h6>
                    <Input
                         name="budgetCurrency"
                         placeholder="Budget Currency"
                         value={budgetCurrency}
                         onChange={e => setbudgetCurrency(e.target.value)}
                    />

                    <VerticalGap gap={10} />
                    <h6> Project Duration </h6>
                    <Input
                         name="duration"
                         placeholder="Duration"
                         value={duration}
                         onChange={e => setDuration(e.target.value)}
                    />

                    <VerticalGap gap={10} />
                    <h6> Category </h6>
                    <Input
                         type="category"
                         placeholder="Category"
                         value={category}
                         onChange={e => setCategory(e.target.value)}
                    />

                    <VerticalGap gap={10} />
                    <h6> Required Stars </h6>
                    <Input
                         name="requiredStars"
                         placeholder="Required Stars"
                         value={requiredStars}
                         onChange={e => setRequiredStars(e.target.value)}
                    />

                    <VerticalGap gap={10} />
                    <h6> Required Skills </h6>
                    <Input
                         name="requiredSkills"
                         placeholder="Required Skills"
                         value={requiredSkills}
                         onChange={e => setRequiredSkills(e.target.value)}
                    />

                    <Button type="submit" onClick={addProject}>Submit</Button>
               </form>
          </FlexColumn>

     );

};

export default CreateProject;

// const Text = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     /* font-size: 3rem; */
//     color: #000000;
// `;