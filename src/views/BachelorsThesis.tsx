// assets
import bachelorFrontPage from "../assets/BachelorFrontPage.png"
import thesis from "../assets/Alexander-Engelhardt-Thesis.pdf"


// components
import { 
  Reveal, 
  DownloadButton,
  ViewTitle, 
  SectionWrapper0,
  SectionWrapper1, 
  SectionWrapper2, 
  SectionWrapper4, 
  Paragraph, 
  Image } from "../components";



const BachelorsThesis = () => {


  return (
    <SectionWrapper0 id="BachelorsThesis" background="#A9978B" >
      <SectionWrapper1>

        <ViewTitle mainText="Bachelor's" spanText="Thesis"/>

        <SectionWrapper2>
            <SectionWrapper4>
              <Reveal>
              <Paragraph style={{ color: 'Black' }}>
                With the help of my supervisor, Docent Jeremias Berg I iteratively worked on the thesis. At the end I reached a great text that earned me the highest possible grade. 
                The somewhat strict criteria for how the thesis should be written was a stimulating endeavor that let me challenge myself. As I have always loved writing, the process
                of writing the thesis was fun to me. I have strived to make the thesis as understanable and enjoyble to read as possible, even for people without expert knowledge.
                If you are interested you can download the thesis by clicking the download button beneath the picture.
              </Paragraph>

            

              <div className="mb-4" />

              <Paragraph>
                The topic of my bachelor's thesis is how the core structural differences between Monolithic- and Microservice architecture has great impact on what can be
                achieved with a software. More specifically it compares how the two architectures differ in their ability to perform, scale with numbers of users, deploy and be cyber secure.
                These qualities where chosen on the basis of being especially important when comparing Monolithic- and Microservice architecture in specific while also constituting crucial
                qualitites in their own right.

              </Paragraph>
            

              <div className="mb-4" />

              <Paragraph>
                Your often told that it doesn't matter what you write about in your bachelor's thesis. Obviously it is not as grand or profound
                as some other works, but I disagree with the notion that it doesn't matter. It is still a good chunk of text where you can research and
                familiarize yourself with a topic on a somewhat deeper plane, while also practicing scientific writing and critical thinking.

              </Paragraph>
            

              <div className="mb-4" />

              <Paragraph>
                I experienced difficulty when choosing the topic of my thesis. This was due to the fact that I wanted to optimize the topic, balancing several factors.
                First, the topic was to be interesting to me personally while also challenging me to learn something new. Considering that I like arts and design I 
                considered a topic centering around human-computer intecation. At the same I felt that something more technical would challenge me more. From this perspective
                I considered topics such as Full-stack development and even Real-time computer graphics. Second, I wanted to learn about something that could help me in my other projects
                outside the context of the bachelor's thesis. As I am really keen on personal projects something to do with Full-stack development seemed like a logical choice. As I am
                also really interested in starting my own company I seriously considered writing about Software development in small companies. Third, though impossible to know, 
                I wanted the topic to help me steer my skills and career in a direction that is robust against being replaced by AI. Here the nitty gritties associated with learning specific
                technologies used in Full-stack development, meant this topic potentially wasn't the best in the long run.
              </Paragraph>

              </Reveal>
            </SectionWrapper4>
            
            <SectionWrapper4>
              <Reveal>
                <div className="flex-1 flex flex-col items-center justify-center">             
                  <Image src={bachelorFrontPage} className="max-w-full sm:max-w-[401px] mb-4"/>
                  <DownloadButton 
                    file={thesis}
                    filename="Alexander_Engelhardt_Thesis.pdf"
                    ButtonText="Thesis"
                  />
                </div>

                <div className="mb-5" />

                <Paragraph>
                  An intersting topic which could maybe be more robust against replacement of AI
                  is Model-Driven Development. I however refrained from this topic for my bachelor's thesis as I had little experience with the topic.  
                </Paragraph>

                <div className="mb-4" />

                <Paragraph>
                  At the end I wanted to write about something to do with Software architecture as this felt like a topic which balanced best between the relevant factors. It was also technical enough
                  to challenge me. As software architecture makes up the skeleton of a software it is important understanding any software. Wanting to increase the focus on the technical aspects of
                  software architecture I chose to focus on quality attributes and architectural tactics. To scope things down and make the thesis focus on something a bit more concrete I refrained from
                  writing about software architecture and quality attributes on a theoretical level and instead focused on comparing two examples.  
                </Paragraph>
              </Reveal>
            </SectionWrapper4>
        </SectionWrapper2>
      </SectionWrapper1>
    </SectionWrapper0>
  );
}

export default BachelorsThesis;
