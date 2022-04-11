question_content =
{
    "sequences":[
        {
        image:"../images/questions/Sequences/seq_1.png",
        value:"B"
        },
        {
            image:"../images/questions/Sequences/seq_2.png",
            value:"B"
        },
        {
            image:"../images/questions/Sequences/seq_3.png",
            value:"D"
            },
            {
                image:"../images/questions/Sequences/seq_4.png",
                value:"C"
                },
                {
                    image:"../images/questions/Sequences/seq_5.png",
                    value:"A"
                    },
                    {
                        image:"../images/questions/Sequences/seq_6.png",
                        value:"C"
                        }
        ]
        ,"AOD":[
           {
               image:"../images/questions/AOD/1.png",
               value:"B"
           },
           {
            image:"../images/questions/AOD/2.png",
            value:"C"
        },
        {
            image:"../images/questions/AOD/3.png",
            value:"B"
        },
        {
            image:"../images/questions/AOD/4.png",
            value:"A"
        },
        {
            image:"../images/questions/AOD/5.png",
            value:"D"
        },
        {
            image:"../images/questions/AOD/6.png",
            value:"A"
        }
        ],
        "Complex":[
            {
                image:"../images/questions/Complex/1.png",
                value:"C"
            },
            {
                image:"../images/questions/Complex/2.png",
                value:"B"
            },
            {
                image:"../images/questions/Complex/3.png",
                value:"C"
            },
            {
                image:"../images/questions/Complex/4.png",
                value:"A"
            },
            {
                image:"../images/questions/Complex/5.png",
                value:"C"
            },
            {
                image:"../images/questions/Complex/6.png",
                value:"C"
            }
        ],
        "ConicSections":[
            {
                image:"../images/questions/Conic Sections/1.png",
                value:"D"
            },
            {
                image:"../images/questions/Conic Sections/2.png",
                value:"B"
            },
            {
                image:"../images/questions/Conic Sections/3.png",
                value:"B"
            },
            {
                image:"../images/questions/Conic Sections/4.png",
                value:"C"
            },
            {
                image:"../images/questions/Conic Sections/5.png",
                value:"B"
            },
            {
                image:"../images/questions/Conic Sections/6.png",
                value:"A"
            }
        ],
        "FunctionsandRelations":[
            {
                image:"../images/questions/Functions and Relations/1.png",
                value:"A"
            },
            {
                image:"../images/questions/Functions and Relations/2.png",
                value:"B"
            },
            {
                image:"../images/questions/Functions and Relations/3.png",
                value:"B"
            },
            {
                image:"../images/questions/Functions and Relations/4.png",
                value:"C"
            },
            {
                image:"../images/questions/Functions and Relations/5.png",
                value:"D"
            },
            {
                image:"../images/questions/Functions and Relations/6.png",
                value:"D"
            }
        ],
        "Integration":[
            {
                image:"../images/questions/Integration/1.png",
                value:"A"
            },
            {
                image:"../images/questions/Integration/2.png",
                value:"A"
            },
            {
                image:"../images/questions/Integration/3.png",
                value:"A"
            },
            {
                image:"../images/questions/Integration/4.png",
                value:"B"
            },
            {
                image:"../images/questions/Integration/5.png",
                value:"A"
            },
            {
                image:"../images/questions/Integration/6.png",
                value:"A"
            },
        ]
}
let genre =Number(localStorage.getItem("Genre"));
console.log(genre);
document.getElementById("money1").innerHTML= localStorage.getItem("coin");
let current_level = Number(localStorage.getItem("level"));
document.getElementById("LEVEL").innerHTML= "level "+current_level;
getquestion(genre,current_level);
function getquestion(genre,current_level)
{
    if(genre==1)
    {
        document.getElementById("question").src = question_content.sequences[current_level-1].image;
    }
    
    else if(genre==2)
    {
        document.getElementById("question").src = question_content.AOD[current_level-1].image;
  
    }
    
    else if(genre==3)
    {
        document.getElementById("question").src = question_content.Complex[current_level-1].image;
       
    }
    
    else if(genre==4)
    {
        document.getElementById("question").src = question_content.ConicSections[current_level-1].image;
        
    }
    
    else if(genre==5)
    {
        document.getElementById("question").src = question_content.FunctionsandRelations[current_level-1].image;
        
    }
    
    else
    {
        document.getElementById("question").src = question_content.Integration[current_level-1].image;
       
    }

}
function getcorrectanswer(genre,current_level)
{
    if(genre==1)
    {
        return(question_content.sequences[current_level-1].value);
        
    }
    
    else if(genre==2)
    {
        return(question_content.AOD[current_level-1].value);

    }
    
    else if(genre==3)
    {
        return(question_content.Complex[current_level-1].value);

    }
    
    else if(genre==4)
    {
        return(question_content.ConicSections[current_level-1].value);

    }
    
    else if(genre==5)
    {
        return(question_content.FunctionsandRelations[current_level-1].value);

    }
    
    else
    {
        return(question_content.Integration[current_level-1].value);

    }
}
function scoreCalculate()
{
   let Val_A =   document.getElementById("A").value;
   let Val_B =   document.getElementById("B").value;
   let Val_C =   document.getElementById("C").value;
   let Val_D =   document.getElementById("D").value;
    let correct_answer = getcorrectanswer(genre,current_level);
    let current__coins=Number(localStorage.getItem("coin"));
    if(correct_answer=="A")
    current__coins=current__coins+Val_A*100-Val_B*100-Val_C*100-Val_D*100;
    else if(correct_answer=="B")
    current__coins=current__coins-Val_A*100+Val_B*100-Val_C*100-Val_D*100;
    else if(correct_answer=="C")
    current__coins=current__coins-Val_A*100-Val_B*100+Val_C*100-Val_D*100;
    else
    current__coins=current__coins-Val_A*100-Val_B*100-Val_C*100+Val_D*100;
    console.log(current__coins);
    localStorage.setItem("coin",current__coins);
    localStorage.setItem("level",Number(localStorage.getItem("level"))+1);
}