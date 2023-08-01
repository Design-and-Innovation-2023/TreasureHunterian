import React from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab'
import { Typography } from '@mui/material'
import ReactPlayer from 'react-player';
import Picture01 from '../images/DailyWeekly/Picture01.jpeg'
import Picture02 from '../images/DailyWeekly/Picture02.png'
import Picture03 from '../images/DailyWeekly/Picture03.jpeg'

const DailyAndWeekly = () => {

    const weekOneVideoURL = 'https://youtu.be/Yiq9yuyqU28'
    const weekTwoVideoURL = 'https://youtu.be/Cg6Pq5EuDbw'

  return (
    <div>
          <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
         <Typography variant="h1" style={{ fontSize: '2rem', fontWeight: 'bold' }} className=" text-ternary-dark dark:text-ternary-light">
           Daily and Weekly
         </Typography>
         <br></br>
         <Typography>
            <p style={{fontSize:"20px"}} className=" text-ternary-dark dark:text-ternary-light">
            Every weekday, the team would document what was done for that day
                </p>
            <p style={{fontSize:"20px"}} className=" text-ternary-dark dark:text-ternary-light">
                and we update our clients to get feedback on our progress.</p>
            <p style={{fontSize:"20px"}} className=" text-ternary-dark dark:text-ternary-light">
                Scroll down to find out more!
            </p>
         </Typography>
    </div>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h6" component="span">
        <p className=" text-ternary-dark dark:text-ternary-light">
              20 July 2023
              </p>
        </Typography>
        <Typography>
            <p className=" text-ternary-dark dark:text-ternary-light">
             Today we officially started classes. We were introduced to interesting subjects of matter such as Mental Models, Asking Useful Questions, Brainstorming Methodologies. The remainder of the module has been set up for us and now we have to implement the tools and knowledge acquired back into our main project which is with The Hunterian Museum. Tomorrow will be our first meeting with the clients and we are thoroughly prepared with inquisitive questions regarding the project and hope that the clients are able to answer them all for us to create the best fitted solution for them.
            </p>
        </Typography>


    </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            
            <Typography variant="h6" component="span">
            <p className=" text-ternary-dark dark:text-ternary-light">
               19 July 2023
               </p>
             </Typography>
             <Typography>
             <p className=" text-ternary-dark dark:text-ternary-light">
             We had our very first client meeting! The two teams got together and met up with Ruth at the Hunterian Museum. Question pertaining to the project were answered thoroughly which gave the teams greater insights into the project. Further questions were also asked to clarify any missing potholes in our understanding of what the Museum needed from us. Briefly, the museum needs a solution from the team that encourages families and children specifically to be engaged in their museum visits. The more common age group to cater towards are 11 to 14 and 8 to 11. Currently the museum has implemented features that enrich the visitor’s experience through audio and visual however they lack activities for the visitors to DO. This is where we come in to suggest a design idea that fills in this very gap. The teams have extensively taken down notes from Ruth’s wonderfully in-depth sharing and insights session and are now actively in discussion and ideating stages to propose back to the Museum before any further execution can take place.
             </p>
             </Typography>

    </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
                 <Typography variant="h6" component="span">
                 <p className=" text-ternary-dark dark:text-ternary-light">
               20 July 2023
               </p>
             </Typography>
             <Typography>

             <p className=" text-ternary-dark dark:text-ternary-light">Ideation Day! The team had a thorough and exciting day tearing through multiple ideas that would fit our customer’s requirements. As we learnt through the meeting yesterday our target audience is the younger age groups and one of the popular methods that developers are integrating education and fun are through games. This is the route the team chose to go on. Through games we will be able to keep the children engaged as well as be able to pass informative facts regarding the artefacts and the area. With this, the team hit the whiteboard and began on brainstorming. We finally agreed upon 3 ideas.</p>
                 <br></br>
                 <p className=" text-ternary-dark dark:text-ternary-light">1. A treasure hunt which brings the children on a scavenger hunt around the museum</p>
                 <p className=" text-ternary-dark dark:text-ternary-light">2. A digital game in which the children go around the artefacts and play different games tagged to the different artefacts.</p>
                 <p className=" text-ternary-dark dark:text-ternary-light">3. A digital visual storytelling to explain the stories behind the artefacts instead of the children reading a lot of words.</p>
                 <p className=" text-ternary-dark dark:text-ternary-light">We feel good on what we have come up so far however we also acknowledge the fact that there are some potholes to fill up before we are able to make a proper pitch as well as begin on prototyping.</p>
                 <br></br>
                 <p className=" text-ternary-dark dark:text-ternary-light">Tomorrow we have planned to dive into detail about each of the ideas as well as begin on prototyping each idea through coming up of wireframes and as well as a quick Figma sketch. We hope through this we are able to visualise our ideas better and as well as explain it better.</p>
                 <img src={Picture01} alt="Picture 01" className="object-contain w-full h-full" />
             </Typography>

             </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            
            <Typography variant="h6" component="span">
            <p className=" text-ternary-dark dark:text-ternary-light">
               19 July 2023
               </p>
             </Typography>
             <Typography>
                <p className=" text-ternary-dark dark:text-ternary-light">Prototyping! So as we set yesterday to complete out the details of the ideas we did just that. Now we have 3 full ideas of what we believe could benefit the museum. The team then set out to perform the prototyping stage. However, we hit a small blocker in the middle of the process.</p>
                 <p className=" text-ternary-dark dark:text-ternary-light">Our original perception of creating a prototype was to create wireframes and figma designs for better visualisation however we understand now that before we set out to do that we have to get a feel of what it is like to experience our idea.</p>
                 <p className=" text-ternary-dark dark:text-ternary-light">Only through experiencing the idea will we be able to identify its needs, effectiveness and as well as learn how it could actually work in process.</p>
                 <p className=" text-ternary-dark dark:text-ternary-light">Later in the day, we decided to do some simple sketches that resembled what we had in mind on drawing cards. We had a peer outside the group to play out our simulated idea by interacting with the drawing cards while we guide him the flow of the game.</p>
                 <p className=" text-ternary-dark dark:text-ternary-light">Through this, we saw how our idea come into play and got some feedback from our peer of his experience. This would help us to better design the app and revamp our prototype for a better hi-fi design.</p>
                 <br></br>
                     <p style={{fontSize:"30px"}}className=" text-ternary-dark dark:text-ternary-light">Week 1 Video</p>
                     <ReactPlayer
                        url={weekOneVideoURL}
                        controls
                        width="100%"
                        height="400px" // Set the height of ReactPlayer to 100% of the parent element (motion.div)
                        style={{
                            border: '4px solid #000000', // Set the border styles for the video
                            borderRadius: '8px', // Add some border radius for rounded corners
                        }}/>
             </Typography>
    </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
                 <Typography variant="h6" component="span">
                 <p className=" text-ternary-dark dark:text-ternary-light">
               24 July 2023
               </p>
             </Typography>
             <Typography>
                <p className=" text-ternary-dark dark:text-ternary-light">Finalised Solution + Implementation Planning!</p>
                <br></br>
                <p className=" text-ternary-dark dark:text-ternary-light">Start of a new week with new insights into our project. We had an update meeting with Ruth today where ideas that were proposed were discussed in greater detail along with a short presentation of the flow of each idea. We received a bundle worth of useful insights on our ideas from Ruth. There were some tips for improving upon the existing idea and it was also noted that all three ideas were possible solutions and there was at least one aspect of each idea that was positive. Hence, the team has decided upon combining the three ideas into one by mixing the aspects of each ideas we liked.</p>
                <br></br>
                <p className=" text-ternary-dark dark:text-ternary-light">After the meeting, the team came together to further discuss on the details of our new solution. After going through multiple discussions on the various aspects of the new idea we have now come up with one solid plan of action/implementation for the solution. Scopes of the project were set to only mobile phones due to the time constraints as well as backed up by our research that most people carry phones over tablets with them.</p>
                <br></br>
                <p className=" text-ternary-dark dark:text-ternary-light">The idea, which currently has no name and we will refer to as Project X, is to provide a gamified platform to the users. Each users will be directed around the museum through various numbers of activities/games by our virtual guide character who imparts knowledge related to that specific topic along the way. The user gets the opportunity to learn more about the museum artefacts in a fun and visually engaging manner as well as learn more about our virtual guide as they progress through the storylines. Also we are aiming to design the storyline in such a way so that the next station in the story is able to be randomised in order to avoid users from crowding in one area due to all of the following the same flow.</p>
                <br></br>
                <p className=" text-ternary-dark dark:text-ternary-light">The plan of action from today is to come up with the design of the components, start implementing the framework for the games as well as start on the baseline design for our portfolio website. We have split the team into 3 sub teams that tackles each of these tasks in order to keep up with the time limits imposed during this project. We are eager to experience what possible challenges lie ahead of us during this project.</p>
             
             </Typography>

        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            
            <Typography variant="h6" component="span">
            <p className=" text-ternary-dark dark:text-ternary-light">
               25 July 2023
               </p>
             </Typography>
             <Typography>
                <p className=" text-ternary-dark dark:text-ternary-light">Implementation Day!</p>
                <br></br>
                <p className=" text-ternary-dark dark:text-ternary-light">The team has been working hard on each of the three components we have set out to do. For the portfolio website we have gone across various designs and implementations that would possibly capture our reader’s attention instantly. We are also playing around with the idea of it having some visual cues or slight transition/animation to captivate the reader and keep their attention.</p>
                <br></br>
                <p className=" text-ternary-dark dark:text-ternary-light">Apart from that, focusing more on the actual project, we have started implementing one of the three games that we plan to implement in our solution. The team are working out the game mechanics such that it caters for the younger audience and in order to do so we are researching into how the kids of that age group think and what their cognitive thinking is like.</p>
                <br></br>
                <p className=" text-ternary-dark dark:text-ternary-light">For the UI and interactions aspect, we are still coming up with the finalised design. We are keeping to the theme of captivating the young children to keep their attention with graphics that would capture their attention. Along with that we are also working on a short linear storyline that will go hand in hand with how the children interact with the various parts of the museum. Below is a screenshot of what we’ve been working on.</p>
                <br></br>
                <p className=" text-ternary-dark dark:text-ternary-light">We will be continuing on our implementation and hope to come up with a working first draft by Thursday when we will be having another meeting with Ruth.</p>
                <br></br>
                <p className=" text-ternary-dark dark:text-ternary-light">As usual we have been implementing what we’ve been taught in lectures back into our project as much as we can and will continue to do so. The exercises have been a lot of help as most of us here on the team are practical learners.</p>
                <img src={Picture02} alt="Picture 02" style={{ maxHeight: "500px", float: "right" }} />
             </Typography>
    </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
                 <Typography variant="h6" component="span">
                 <p className=" text-ternary-dark dark:text-ternary-light">
               26 July 2023
               </p>
             </Typography>
             <Typography>
             <p className=" text-ternary-dark dark:text-ternary-light">
             Implementation Day!
             </p>
            <br></br>
            <p className=" text-ternary-dark dark:text-ternary-light">
            Another implementation day for the team. The team continued on their implementation plan, storyline was expanded. We now have dialogue and content for our first quest out of a total of 3 quests. The UI design bedrock has been completed and now it is just a matter of incorporating our content together with the different scenes on the UI side.
            </p>
            <br></br>
            <p className=" text-ternary-dark dark:text-ternary-light">
            The website design has also been expanded and we are now uploading our archives of our design process thus far. It has been a fruitful process to look back from when we started till now and we still have a little more to go.
            </p>
            <br></br>
            <p className=" text-ternary-dark dark:text-ternary-light">
            Game mechanics have been discovered in detail since yesterday and each game has now been designed in such a way that it follows the theme of the respective section of the museum.
            </p>
            <br></br>
            <p className=" text-ternary-dark dark:text-ternary-light">
            Overall we decided to lower the quantity output today compared to yesterday because we acknowledge that it was much needed for the quality of our work. Quality over quantity is the motto.
            </p>
            </Typography>

        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            
            <Typography variant="h6" component="span">
            <p className=" text-ternary-dark dark:text-ternary-light">
               27 July 2023
               </p>
             </Typography>
             <Typography>
             <p className=" text-ternary-dark dark:text-ternary-light">
            Implementation and Meeting Day!
            </p>
            <br></br><br></br>
            <p className=" text-ternary-dark dark:text-ternary-light">
            We started the day with a meeting with Ruth in which we showed her our mock up design and the app flow along with the games that we had designed. We gained a lot of new insights from today as well. We noted that some of the dialogue needed to be updated as well as steering more towards the older age group due to the nature of our product. We also came to a decision as a team that the storyline could have been more simplified and less text heavy to which we have updated the storyline as well. Apart from that we also focused on the minor details of the UI to make it more intuitive and there were a ton of design decisions that were made to come to the finalised draft version of our product. What we intend to do now is to try out the entire flow by ourselves to gain further insights by practical experience and improve from there onwards.
            </p>
            <br></br><br></br>
            <p className=" text-ternary-dark dark:text-ternary-light">
            Apart from what I mentioned early on of actually testing out the design at the museum we intend to finalise the design and import it over to our actual final website and integrate the games into it as well to come up with a final mockup website to play around with on our next meeting with Ruth, next Tuesday.
            </p>
            <br></br><br></br>
            <p className=" text-ternary-dark dark:text-ternary-light">
            We can feel the burn of the process intensifying but that’s half the fun of it.
            </p>

             </Typography>
    </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
                 <Typography variant="h6" component="span">
                 <p className=" text-ternary-dark dark:text-ternary-light">
               28 July 2023
               </p>
             </Typography>
             <Typography>
             <p className=" text-ternary-dark dark:text-ternary-light">
             Implementation Day!
             </p>
            <p className=" text-ternary-dark dark:text-ternary-light">
            Today we worked upon our final designs, incorporating new changes as well as creating new graphic assets to be added, such as this Ms Monocle’s asset:
            <img src={Picture03} alt="Picture 03" style={{ maxHeight: "500px"}} />
            </p>
            <p className=" text-ternary-dark dark:text-ternary-light">
            As you can see we are trying our very best to make this suited for children to enjoy. After our meeting from yesterday it was agreed upon that we would only need to implement the storyline for just one of the quests as well as show how it links over to the next quest. Hence the scope of creating a storyline for 3 different quests has now been reduced to just 1 quest with a transition.
            </p>
            <br></br><br></br>
            <p className=" text-ternary-dark dark:text-ternary-light">
            At the moment we are also facing certain difficulties when it comes to the design of the webpage being in portrait as our games are needed to be in landscape to play them. Hence we are trying to find a work around and as a worst case scenario we would have to convert the entire app to be in landscape, which we think might be easier to use for kids? Again, we are looking very much into this interesting hurdle.
            </p>
            <br></br><br></br>
            <p className=" text-ternary-dark dark:text-ternary-light">
            We have also asked Ruth to provide some photos and models from the museum’s database on certain artefact which would help us create accurate models for our graphics and use them as in game prizes. Previously, we were using random artwork as a digital prize for completing quests and now we shall be changing that to models of dinosaurs as we want to appeal to the younger audience and with the very helpful suggestion from Ruth, we too believe that it is a better digital prize for kids.
            </p>
            <br></br><br></br>
            <p className=" text-ternary-dark dark:text-ternary-light">
            What we still need to do for this project is to keep working on the integration aspect of it however the main thing we’d like to do is to perform some usability exercises of our own. We have already tested the hi-fi prototype in the museum but we would love to gain further insights into our design and our plan is to ask fellow students to try out the flow of the app in a think aloud manner and list down what is going through their minds as they go through the app as well as conduct a heuristics test on the app with another group of student.
            </p>
            <br></br><br></br>
            <p className=" text-ternary-dark dark:text-ternary-light">
            We believe at this stage it would help us significantly to gain insights on the usability aspect of our web app as we are nearing the endgame.
            </p>
            </Typography>

            <br></br>
                     <p style={{fontSize:"30px"}} className=" text-ternary-dark dark:text-ternary-light">Week 2 Video</p>
                     <ReactPlayer
                        url={weekTwoVideoURL}
                        controls
                        width="100%"
                        height="400px" // Set the height of ReactPlayer to 100% of the parent element (motion.div)
                        style={{
                            border: '4px solid #000000', // Set the border styles for the video
                            borderRadius: '8px', // Add some border radius for rounded corners
                        }}/>

        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            
            <Typography variant="h6" component="span">
            <p className=" text-ternary-dark dark:text-ternary-light">
               31 July 2023
               </p>
             </Typography>
             <Typography>
             <p className=" text-ternary-dark dark:text-ternary-light">
             ♫ It’s the final countdown ♫
             </p>
             <p className=" text-ternary-dark dark:text-ternary-light">
            The pressure’s on but we’ve been pushing through. The team has been focusing on fixing bugs, including quality of life features as well as tidying up the design of the app. We also incorporated some of the feedback we got on our weekly pitch video #2, such as the puzzle pieces are now dispersed around to make it a challenge to piece the puzzle back. We have now implemented the web app in landscape mode for ease of use, it is close to 100% completion.
            <br></br><br></br>
            As for the portfolio website we have divided the website into different sections similar to the different chapters to our project development. Each chapter talks about a certain section of our development such as requirement gathering, wire framing & usability testing etc. Apart from filling up these chapters with our experiences from this project we are also working on incorporating our dailies and weekly videos in a visual manner which is easy to follow for readers. In an attempt to capture our reader’s attention we are also working on creating 3D mockups of the web app on a phone as well as come up with a short trailer for the app so that we can pass on important information about our app in a short time frame. Apart from this content, the team is also working on UI/UX aspect of the website to improve design to make the website more readable to readers.
            <br></br><br></br>
            We also started on making our poster drafts. We are trying to design a poster that forwards important information about our app in a structured manner with good balance of white space while experimenting with other abstract designs in an attempt to grasp the attention of visitors around our stand. Apart from that, a challenge we are facing is that we have a lot to talk about our application however, we do not want to bombard the readers with a lot of text and manage the visuals properly.
            <br></br><br></br>
            We are looking forward to the exhibition where we get to showcase our product.
            </p>

             </Typography>
    </TimelineContent>
      </TimelineItem>

    </Timeline>
    </div>


    // <div>
    //   <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
    //     <Typography variant="h1" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
    //       Daily and Weekly
    //     </Typography>
    //   </div>
    //   <Timeline style={{ marginRight: '250px', paddingLeft: '2rem' }}>

    //     <TimelineItem>
    //       <TimelineSeparator>
    //         <TimelineDot color="primary" />
    //         <TimelineConnector />
    //       </TimelineSeparator>
    //       <TimelineContent>
    //         <Typography variant="h6" component="span">
    //           18 July 2023
    //         </Typography>
    //         <Typography>

    //         Today we officially started classes. We were introduced to interesting subjects of matter such as Mental Models, Asking Useful Questions, Brainstorming Methodologies. The remainder of the module has been set up for us and now we have to implement the tools and knowledge acquired back into our main project which is with The Hunterian Museum. Tomorrow will be our first meeting with the clients and we are thoroughly prepared with inquisitive questions regarding the project and hope that the clients are able to answer them all for us to create the best fitted solution for them.
            
    //         </Typography>
    //       </TimelineContent>
    //     </TimelineItem>

    //     <TimelineItem>
    //       <TimelineSeparator>
    //         <TimelineDot color="primary" />
    //         <TimelineConnector />
    //       </TimelineSeparator>
    //       <TimelineContent>
    //         <Typography variant="h6" component="span">
    //           19 July 2023
    //         </Typography>
    //         <Typography>

    //         We had our very first client meeting! The two teams got together and met up with Ruth at the Hunterian Museum. Question pertaining to the project were answered thoroughly which gave the teams greater insights into the project. Further questions were also asked to clarify any missing potholes in our understanding of what the Museum needed from us. Briefly, the museum needs a solution from the team that encourages families and children specifically to be engaged in their museum visits. The more common age group to cater towards are 11 to 14 and 8 to 11. Currently the museum has implemented features that enrich the visitor’s experience through audio and visual however they lack activities for the visitors to DO. This is where we come in to suggest a design idea that fills in this very gap. The teams have extensively taken down notes from Ruth’s wonderfully in-depth sharing and insights session and are now actively in discussion and ideating stages to propose back to the Museum before any further execution can take place.
            
    //         </Typography>
    //       </TimelineContent>
    //     </TimelineItem>

    //     <TimelineItem>
    //       <TimelineSeparator>
    //         <TimelineDot color="primary" />
    //         <TimelineConnector />
    //       </TimelineSeparator>
    //       <TimelineContent>
    //         <Typography variant="h6" component="span">
    //           20 July 2023
    //         </Typography>
    //         <Typography>

    //             <p>Ideation Day! The team had a thorough and exciting day tearing through multiple ideas that would fit our customer’s requirements. As we learnt through the meeting yesterday our target audience is the younger age groups and one of the popular methods that developers are integrating education and fun are through games. This is the route the team chose to go on. Through games we will be able to keep the children engaged as well as be able to pass informative facts regarding the artefacts and the area. With this, the team hit the whiteboard and began on brainstorming. We finally agreed upon 3 ideas.</p>
    //             <br></br>
    //             <p>1. A treasure hunt which brings the children on a scavenger hunt around the museum</p>
    //             <p>2. A digital game in which the children go around the artefacts and play different games tagged to the different artefacts.</p>
    //             <p>3. A digital visual storytelling to explain the stories behind the artefacts instead of the children reading a lot of words.</p>
    //             <p>We feel good on what we have come up so far however we also acknowledge the fact that there are some potholes to fill up before we are able to make a proper pitch as well as begin on prototyping.</p>
    //             <br></br>
    //             <p>Tomorrow we have planned to dive into detail about each of the ideas as well as begin on prototyping each idea through coming up of wireframes and as well as a quick Figma sketch. We hope through this we are able to visualise our ideas better and as well as explain it better.</p>
    //             <img src={Picture01} alt="Picture 01" className="object-contain w-full h-full" />
    //         </Typography>
    //       </TimelineContent>
    //     </TimelineItem>

    //     <TimelineItem>
    //       <TimelineSeparator>
    //         <TimelineDot color="primary" />
    //         <TimelineConnector />
    //       </TimelineSeparator>
    //       <TimelineContent>
    //         <Typography variant="h6" component="span">
    //           21 July 2023
    //         </Typography>
    //         <TimelineConnector />
    //         <Typography>
    //             <p>Prototyping! So as we set yesterday to complete out the details of the ideas we did just that. Now we have 3 full ideas of what we believe could benefit the museum. The team then set out to perform the prototyping stage. However, we hit a small blocker in the middle of the process.</p>
    //             <p>Our original perception of creating a prototype was to create wireframes and figma designs for better visualisation however we understand now that before we set out to do that we have to get a feel of what it is like to experience our idea.</p>
    //             <p>Only through experiencing the idea will we be able to identify its needs, effectiveness and as well as learn how it could actually work in process.</p>
    //             <p>Later in the day, we decided to do some simple sketches that resembled what we had in mind on drawing cards. We had a peer outside the group to play out our simulated idea by interacting with the drawing cards while we guide him the flow of the game.</p>
    //             <p>Through this, we saw how our idea come into play and got some feedback from our peer of his experience. This would help us to better design the app and revamp our prototype for a better hi-fi design.</p>
    //             <div>
    //                 <p style={{fontSize:"30px"}}>Week 1 Video</p>
    //             <ReactPlayer
    //             url={weekOneVideoURL}
    //             controls
    //             width="100%"
    //             height="400px" // Set the height of ReactPlayer to 100% of the parent element (motion.div)
    //             style={{
    //                 border: '4px solid #000000', // Set the border styles for the video
    //                 borderRadius: '8px', // Add some border radius for rounded corners
    //             }}/>
    //             </div>
    //         </Typography>
    //       </TimelineContent>
    //     </TimelineItem>

    //     <TimelineItem>
    //       <TimelineSeparator>
    //         <TimelineDot color="primary" />
    //         <TimelineConnector />
    //       </TimelineSeparator>
    //       <TimelineContent>
    //         <Typography variant="h6" component="span">
    //             abcd
    //         </Typography>
    //         <TimelineConnector />
    //         <Typography>
    //             <p>Prototyping! So as we set yesterday to complete out the details of the ideas we did just that. Now we have 3 full ideas of what we believe could benefit the museum. The team then set out to perform the prototyping stage. However, we hit a small blocker in the middle of the process.</p>
    //             <p>Our original perception of creating a prototype was to create wireframes and figma designs for better visualisation however we understand now that before we set out to do that we have to get a feel of what it is like to experience our idea.</p>
    //             <p>Only through experiencing the idea will we be able to identify its needs, effectiveness and as well as learn how it could actually work in process.</p>
    //             <p>Later in the day, we decided to do some simple sketches that resembled what we had in mind on drawing cards. We had a peer outside the group to play out our simulated idea by interacting with the drawing cards while we guide him the flow of the game.</p>
    //             <p>Through this, we saw how our idea come into play and got some feedback from our peer of his experience. This would help us to better design the app and revamp our prototype for a better hi-fi design.</p>
    //         </Typography>
    //       </TimelineContent>
    //     </TimelineItem>

    //   </Timeline>
    // </div>
  );
};

export default DailyAndWeekly;