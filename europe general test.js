const questions = [
   
    { question: "Select the countries that are part of Northern Europe.", type: "checkbox", options: ["Norway", "Iceland", "Poland", "Estonia"], answer: ["Norway", "Iceland", "Estonia"] },
    { question: "Which of the following are Scandinavian countries?", type: "checkbox", options: ["Sweden", "Denmark", "Finland", "Latvia"], answer: ["Sweden", "Denmark", "Finland"] },
    { question: "Identify the countries known for their fjords.", type: "checkbox", options: ["Norway", "Sweden", "Iceland", "Denmark"], answer: ["Norway", "Iceland"] },
    { question: "Which of these countries border the Baltic Sea?", type: "checkbox", options: ["Estonia", "Latvia", "Lithuania", "Norway"], answer: ["Estonia", "Latvia", "Lithuania"] },
    { question: "Select the capital cities of Northern European countries.", type: "checkbox", options: ["Copenhagen", "Reykjavik", "Oslo", "Riga"], answer: ["Copenhagen", "Reykjavik", "Oslo", "Riga"] },
    { question: "Which countries are known for Viking history?", type: "checkbox", options: ["Norway", "Denmark", "Sweden", "Iceland"], answer: ["Norway", "Denmark", "Sweden", "Iceland"] },
    { question: "Select the countries with coastlines on the North Sea.", type: "checkbox", options: ["Norway", "Denmark", "Ireland", "Sweden"], answer: ["Norway", "Denmark"] },
    { question: "Which of the following countries have capital cities starting with the letter 'H'?", type: "checkbox", options: ["Iceland", "Finland", "Denmark", "Estonia"], answer: ["Finland"] },
    { question: "Identify the countries with significant geothermal activity.", type: "checkbox", options: ["Iceland", "Norway", "Sweden", "Finland"], answer: ["Iceland"] },
    { question: "Which countries are part of the Nordic Council?", type: "checkbox", options: ["Denmark", "Iceland", "Norway", "Estonia"], answer: ["Denmark", "Iceland", "Norway"] },
    { question: "Select the countries known for aurora borealis (Northern Lights).", type: "checkbox", options: ["Iceland", "Norway", "Sweden", "Latvia"], answer: ["Iceland", "Norway", "Sweden"] },
    { question: "Which of the following countries are part of the European Union?", type: "checkbox", options: ["Estonia", "Finland", "Denmark", "Iceland"], answer: ["Estonia", "Finland", "Denmark"] },
    { question: "Identify the countries with a monarchy.", type: "checkbox", options: ["Sweden", "Denmark", "Norway", "Finland"], answer: ["Sweden", "Denmark", "Norway"] },
    { question: "Which countries are known for their lakes and forests?", type: "checkbox", options: ["Finland", "Sweden", "Norway", "Iceland"], answer: ["Finland", "Sweden"] },
    { question: "Select the countries that have participated in Eurovision.", type: "checkbox", options: ["Denmark", "Norway", "Iceland", "Estonia"], answer: ["Denmark", "Norway", "Iceland", "Estonia"] },
    { question: "Which countries have a population under 10 million?", type: "checkbox", options: ["Iceland", "Norway", "Denmark", "Estonia"], answer: ["Iceland", "Norway", "Denmark", "Estonia"] },
    { question: "Identify the countries with a maritime climate.", type: "checkbox", options: ["Ireland", "Iceland", "Norway", "Estonia"], answer: ["Ireland", "Iceland", "Norway"] },
    { question: "Select the countries that are not members of NATO.", type: "checkbox", options: ["Finland", "Ireland", "Sweden", "Iceland"], answer: ["Ireland"] },
    { question: "Which of these countries have historic trade routes?", type: "checkbox", options: ["Denmark", "Norway", "Sweden", "Iceland"], answer: ["Denmark", "Norway", "Sweden"] },
    { question: "Select the countries with significant influence from the Vikings.", type: "checkbox", options: ["Norway", "Sweden", "Denmark", "Finland"], answer: ["Norway", "Sweden", "Denmark"] },
                                              
   
    { question: "Which countries are considered part of Southern Europe?", type: "checkbox", options: ["Italy", "Spain", "Greece", "Norway"], answer: ["Italy", "Spain", "Greece"] },
    { question: "Select the major rivers in Southern Europe:", type: "checkbox", options: ["Tiber", "Tagus", "Rhine", "Danube"], answer: ["Tiber", "Tagus"] },
    { question: "Which cities are major cultural centers in Southern Europe?", type: "checkbox", options: ["Rome", "Madrid", "Athens", "Vienna"], answer: ["Rome", "Madrid", "Athens"] },
    { question: "Which countries are known for their Mediterranean coastline in Southern Europe?", type: "checkbox", options: ["Spain", "Italy", "Turkey", "France"], answer: ["Spain", "Italy", "France"] },

    
   
    { question: "Which country's flag is shown below? <br><img src='flag-of-italy.jpeg' alt='Flag of Italy'>", type: "multiple", options: ["Italy", "Greece", "Spain"], answer: "Italy" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-spain.jpeg' alt='Flag of Spain'>", type: "multiple", options: ["Spain", "Portugal", "Italy"], answer: "Spain" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-greece.jpeg' alt='Flag of Greece'>", type: "multiple", options: ["Greece", "Cyprus", "Malta"], answer: "Greece" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-portugal.jpeg' alt='Flag of Portugal'>", type: "multiple", options: ["Portugal", "Spain", "Italy"], answer: "Portugal" },
    
    // Northern Europe
    { question: "Which countries are considered part of Northern Europe?", type: "checkbox", options: ["Sweden", "Denmark", "Finland", "Italy"], answer: ["Sweden", "Denmark", "Finland"] },
    { question: "Select the major rivers in Northern Europe:", type: "checkbox", options: ["Volga", "Dnieper", "Murray", "Elbe"], answer: ["Volga", "Elbe"] },
    { question: "Which cities are major cultural centers in Northern Europe?", type: "checkbox", options: ["Stockholm", "Copenhagen", "Helsinki", "Oslo"], answer: ["Stockholm", "Copenhagen", "Helsinki"] },
    { question: "Which countries are known for their Viking history in Northern Europe?", type: "checkbox", options: ["Denmark", "Sweden", "Norway", "Germany"], answer: ["Denmark", "Sweden", "Norway"] },
    
    
   
    { question: "Which country's flag is shown below? <br><img src='flag-of-sweden.jpeg' alt='Flag of Sweden'>", type: "multiple", options: ["Sweden", "Norway", "Finland"], answer: "Sweden" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-denmark.jpeg' alt='Flag of Denmark'>", type: "multiple", options: ["Denmark", "Iceland", "Norway"], answer: "Denmark" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-finland.jpeg' alt='Flag of Finland'>", type: "multiple", options: ["Finland", "Estonia", "Latvia"], answer: "Finland" },
    { question: "Which countries are in Western Europe?", type: "checkbox", options: ["France", "Germany", "Italy", "Poland"], answer: ["France", "Germany", "Italy"] },
    { question: "Select the major rivers in Europe:", type: "checkbox", options: ["Danube", "Rhine", "Amazon", "Thames"], answer: ["Danube", "Rhine", "Thames"] },
    { question: "Which are the major mountain ranges in Europe?", type: "checkbox", options: ["Alps", "Pyrenees", "Rockies", "Appalachians"], answer: ["Alps", "Pyrenees"] },
    { question: "Which countries share the Baltic Sea?", type: "checkbox", options: ["Sweden", "Finland", "Poland", "Spain"], answer: ["Sweden", "Finland", "Poland"] },
    { question: "Which natural resources are found in Europe?", type: "checkbox", options: ["Coal", "Gold", "Oil", "Iron"], answer: ["Coal", "Iron"] },
    { question: "Select the famous landmarks in Europe:", type: "checkbox", options: ["Eiffel Tower", "Big Ben", "Statue of Liberty", "Colosseum"], answer: ["Eiffel Tower", "Big Ben", "Colosseum"] },
    { question: "Which bodies of water surround Europe?", type: "checkbox", options: ["Atlantic Ocean", "Indian Ocean", "Mediterranean Sea", "Arctic Ocean"], answer: ["Atlantic Ocean", "Mediterranean Sea", "Arctic Ocean"] },
    { question: "Which languages are widely spoken in Western Europe?", type: "checkbox", options: ["French", "German", "Italian", "Swahili"], answer: ["French", "German", "Italian"] },
    { question: "Select the countries in the Eurozone:", type: "checkbox", options: ["Germany", "United Kingdom", "France", "Italy"], answer: ["Germany", "France", "Italy"] },
    { question: "Which of these cities are capital cities in Europe?", type: "checkbox", options: ["Berlin", "Madrid", "Rome", "Lisbon"], answer: ["Berlin", "Madrid", "Rome", "Lisbon"] },
  
    // Image-Based Questions
    { question: "Which country's flag is shown below? <br><img src='flag-of-france.jpeg' alt='Flag of France'>", type: "multiple", options: ["France", "Germany", "Italy"], answer: "France" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-germany.jpeg' alt='Flag of Germany'>", type: "multiple", options: ["Germany", "France", "Spain"], answer: "Germany" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-italy.jpeg' alt='Flag of Italy'>", type: "multiple", options: ["Italy", "France", "Greece"], answer: "Italy" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-spain.jpeg' alt='Flag of Spain'>", type: "multiple", options: ["Spain", "Portugal", "Italy"], answer: "Spain" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-uk.jpeg' alt='Flag of the United Kingdom'>", type: "multiple", options: ["United Kingdom", "Ireland", "Scotland"], answer: "United Kingdom" },
  
    // True or False Questions
    { question: "The Eiffel Tower is located in Paris.", type: "truefalse", answer: true },
    { question: "Rome is the capital of Italy.", type: "truefalse", answer: true },
    { question: "Berlin is the capital of France.", type: "truefalse", answer: false },
    { question: "The Thames River flows through London.", type: "truefalse", answer: true },
    { question: "Madrid is the capital of Italy.", type: "truefalse", answer: false },
  
    // Fill in the Blank Questions
    { question: "The capital city of France is ____.", type: "fillblank", answer: "Paris" },
    { question: "The longest river in Europe is the ____ River.", type: "fillblank", answer: "Volga" },
    { question: "The European country known for the Colosseum is ____.", type: "fillblank", answer: "Italy" },
    { question: "The capital of Germany is ____.", type: "fillblank", answer: "Berlin" },
    { question: "The currency used in the Eurozone is the ____. ", type: "fillblank", answer: "Euro" },
  
    // Multiple Choice Questions
    { question: "What is the capital city of the United Kingdom?", type: "multiple", options: ["London", "Edinburgh", "Dublin"], answer: "London" },
    { question: "Which European city is known for its historic Colosseum?", type: "multiple", options: ["Rome", "Athens", "Paris"], answer: "Rome" },
    { question: "The Danube River flows through which major European city?", type: "multiple", options: ["Vienna", "London", "Madrid"], answer: "Vienna" },
    { question: "Which country is known for its tulip fields and windmills?", type: "multiple", options: ["Netherlands", "Belgium", "France"], answer: "Netherlands" },
    { question: "The capital city of Spain is:", type: "multiple", options: ["Madrid", "Barcelona", "Seville"], answer: "Madrid" },
  
    // Checkbox Questions
    { question: "Which countries are in Northern Europe?", type: "checkbox", options: ["Denmark", "Sweden", "Italy", "Norway"], answer: ["Denmark", "Sweden", "Norway"] },
    { question: "Select the major lakes in Europe:", type: "checkbox", options: ["Lake Geneva", "Lake Victoria", "Lake Balaton"], answer: ["Lake Geneva", "Lake Balaton"] },
    { question: "Which countries share the Mediterranean Sea?", type: "checkbox", options: ["Spain", "France", "Egypt", "Italy"], answer: ["Spain", "France", "Italy"] },
    { question: "Which countries are part of the Schengen Area?", type: "checkbox", options: ["Germany", "Switzerland", "United Kingdom", "Italy"], answer: ["Germany", "Switzerland", "Italy"] },
    { question: "Select the capital cities of the Nordic countries:", type: "checkbox", options: ["Oslo", "Helsinki", "Copenhagen", "Stockholm"], answer: ["Oslo", "Helsinki", "Copenhagen", "Stockholm"] },
  
    // Image-Based Questions
    { question: "Which country's flag is shown below? <br><img src='flag-of-denmark.jpeg' alt='Flag of Denmark'>", type: "multiple", options: ["Denmark", "Norway", "Sweden"], answer: "Denmark" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-sweden.jpeg' alt='Flag of Sweden'>", type: "multiple", options: ["Sweden", "Denmark", "Finland"], answer: "Sweden" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-norway.jpeg' alt='Flag of Norway'>", type: "multiple", options: ["Norway", "Sweden", "Denmark"], answer: "Norway" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-netherlands.jpeg' alt='Flag of Netherlands'>", type: "multiple", options: ["Netherlands", "Belgium", "Luxembourg"], answer: "Netherlands" },
    { question: "Which country's flag is shown below? <br><img src='flag-of-uk.jpeg' alt='Flag of the United Kingdom'>", type: "multiple", options: ["United Kingdom", "Ireland", "Scotland"], answer: "United Kingdom" },
    
  // Western Europe
  { question: "Which countries are considered part of Western Europe?", type: "checkbox", options: ["France", "Germany", "Spain", "Poland"], answer: ["France", "Germany", "Spain"] },
  { question: "Select the major rivers in Western Europe:", type: "checkbox", options: ["Rhine", "Danube", "Seine", "Elbe"], answer: ["Rhine", "Seine", "Elbe"] },
  { question: "Which cities are major cultural centers in Western Europe?", type: "checkbox", options: ["Paris", "Berlin", "Madrid", "Vienna"], answer: ["Paris", "Berlin", "Madrid"] },
  { question: "Which countries are known for their historical castles in Western Europe?", type: "checkbox", options: ["France", "Germany", "Italy", "Sweden"], answer: ["France", "Germany", "Italy"] },
  
  
  
  { question: "Which country's flag is shown below? <br><img src='flag-of-france.jpeg' alt='Flag of France'>", type: "multiple", options: ["France", "Italy", "Spain"], answer: "France" },
  { question: "Which country's flag is shown below? <br><img src='flag-of-germany.jpeg' alt='Flag of Germany'>", type: "multiple", options: ["Germany", "Austria", "Netherlands"], answer: "Germany" },
  { question: "Which country's flag is shown below? <br><img src='flag-of-spain.jpeg' alt='Flag of Spain'>", type: "multiple", options: ["Spain", "Portugal", "France"], answer: "Spain" },
  { question: "Which country's flag is shown below? <br><img src='flag-of-uk.jpeg' alt='Flag of the United Kingdom'>", type: "multiple", options: ["United Kingdom", "Ireland", "Netherlands"], answer: "United Kingdom" },
  
  // European Union
  { question: "Which countries are members of the European Union?", type: "checkbox", options: ["France", "Sweden", "Norway", "Germany"], answer: ["France", "Germany", "Sweden"] },
  { question: "Select the institutions of the European Union:", type: "checkbox", options: ["European Parliament", "United Nations", "European Commission", "World Trade Organization"], answer: ["European Parliament", "European Commission"] },
  { question: "Which countries have adopted the Euro as their currency?", type: "checkbox", options: ["Spain", "Italy", "United Kingdom", "Germany"], answer: ["Spain", "Italy", "Germany"] },
  { question: "Which of the following are official languages of the European Union?", type: "checkbox", options: ["English", "French", "German", "Russian"], answer: ["English", "French", "German"] },
  
  
  { question: "Which country's flag is shown below? <br><img src='flag-of-italy.jpeg' alt='Flag of Italy'>", type: "multiple", options: ["Italy", "Greece", "Turkey"], answer: "Italy" },
  { question: "Which country's flag is shown below? <br><img src='flag-of-sweden.jpeg' alt='Flag of Sweden'>", type: "multiple", options: ["Sweden", "Norway", "Denmark"], answer: "Sweden" },
  { question: "Which country's flag is shown below? <br><img src='flag-of-hungary.jpeg' alt='Flag of Hungary'>", type: "multiple", options: ["Hungary", "Poland", "Czech Republic"], answer: "Hungary" },
  { question: "Which country's flag is shown below? <br><img src='flag-of-portugal.jpeg' alt='Flag of Portugal'>", type: "multiple", options: ["Portugal", "Spain", "France"], answer: "Portugal" },
  
  
  
  // Eastern Europe
  { question: "Which countries are considered part of Eastern Europe?", type: "checkbox", options: ["Poland", "Ukraine", "Romania", "Belgium"], answer: ["Poland", "Ukraine", "Romania"] },
  { question: "Select the major rivers in Eastern Europe:", type: "checkbox", options: ["Dnieper", "Vistula", "Danube", "Elbe"], answer: ["Dnieper", "Danube"] },
  { question: "Which cities are major cultural centers in Eastern Europe?", type: "checkbox", options: ["Warsaw", "Budapest", "Kiev", "Vienna"], answer: ["Warsaw", "Budapest", "Kiev"] },
  { question: "Which countries have significant Orthodox Christian populations in Eastern Europe?", type: "checkbox", options: ["Greece", "Serbia", "Poland", "Russia"], answer: ["Greece", "Serbia", "Russia"] },
  
  
  
  { question: "Which country's flag is shown below? <br><img src='flag-of-poland.jpeg' alt='Flag of Poland'>", type: "multiple", options: ["Poland", "Hungary", "Slovakia"], answer: "Poland" },
  { question: "Which country's flag is shown below? <br><img src='flag-of-ukraine.jpeg' alt='Flag of Ukraine'>", type: "multiple", options: ["Ukraine", "Romania", "Bulgaria"], answer: "Ukraine" },
  { question: "Which country's flag is shown below? <br><img src='flag-of-romania.jpeg' alt='Flag of Romania'>", type: "multiple", options: ["Romania", "Moldova", "Serbia"], answer: "Romania" },
  { 
    question: "The capital city of Italy is ______.", 
    type: "fillblank", 
    answer: "Rome" 
  },
  { 
    question: "______ is a famous island belonging to Greece.", 
    type: "fillblank", 
    answer: "Crete" 
  },
  { 
    question: "The Eiffel Tower is located in ______.", 
    type: "fillblank", 
    answer: "France" 
  },
  { 
    question: "______ is known for its historical ruins and contributions to art.", 
    type: "fillblank", 
    answer: "Italy" 
  },
  { 
    question: "The capital city of Spain is ______.", 
    type: "fillblank", 
    answer: "Madrid" 
  },
  { 
    question: "______ is an island country in the Mediterranean Sea.", 
    type: "fillblank", 
    answer: "Malta" 
  },
  { 
    question: "The famous Colosseum is located in ______.", 
    type: "fillblank", 
    answer: "Rome" 
  },
  
      { 
        question: "The capital of Portugal is Lisbon.", 
        type: "truefalse", 
        answer: "True" 
      },
      { 
        question: "Greece is known for its rich history and ancient ruins.", 
        type: "truefalse", 
        answer: "True" 
      },
      { 
        question: "Malta is located in the Adriatic Sea.", 
        type: "truefalse", 
        answer: "False" 
      },
      { 
        question: "Italy is famous for its Renaissance art and architecture.", 
        type: "truefalse", 
        answer: "True" 
      },
      { 
        question: "Spain is a landlocked country.", 
        type: "truefalse", 
        answer: "False" 
      },
      { 
        question: "Cyprus is an island country in the Mediterranean Sea.", 
        type: "truefalse", 
        answer: "True" 
      },
      { 
        question: "Portugal is known for its fjords.", 
        type: "truefalse", 
        answer: "False" 
      },
      { 
        question: "Which countries are part of Western Europe? (Select all that apply)", 
        type: "checkbox", 
        options: ["France", "Germany", "Spain", "Belgium"], 
        answer: ["France", "Germany", "Belgium"] 
      },
      { 
        question: "Which countries are known for having major cities on the Rhine River? (Select all that apply)", 
        type: "checkbox", 
        options: ["Germany", "France", "Netherlands", "Belgium"], 
        answer: ["Germany", "France", "Netherlands", "Belgium"] 
      },
      { 
        question: "Which countries have a coastline along the North Sea? (Select all that apply)", 
        type: "checkbox", 
        options: ["Netherlands", "Belgium", "Denmark", "Germany"], 
        answer: ["Netherlands", "Belgium", "Denmark", "Germany"] 
      },
      { 
        question: "Which countries are known for producing high-quality chocolates? (Select all that apply)", 
        type: "checkbox", 
        options: ["Belgium", "Switzerland", "France", "Italy"], 
        answer: ["Belgium", "Switzerland"] 
      },
      { 
        question: "Which countries are part of the Benelux Union? (Select all that apply)", 
        type: "checkbox", 
        options: ["Belgium", "Netherlands", "Luxembourg", "Germany"], 
        answer: ["Belgium", "Netherlands", "Luxembourg"] 
      },
      { 
        question: "Which countries are famous for their castles and medieval history? (Select all that apply)", 
        type: "checkbox", 
        options: ["Germany", "France", "Austria", "Netherlands"], 
        answer: ["Germany", "France", "Austria"] 
      },
      { 
        question: "Which countries have the most famous ski resorts in Europe? (Select all that apply)", 
        type: "checkbox", 
        options: ["Switzerland", "France", "Belgium", "Germany"], 
        answer: ["Switzerland", "France", "Germany"] 
      },
      
          { 
            question: "The capital city of Belgium is ______.", 
            type: "fillblank", 
            answer: "Brussels" 
          },
          { 
            question: "______ is known for its beautiful canals and tulip fields.", 
            type: "fillblank", 
            answer: "Netherlands" 
          },
          { 
            question: "The official language of Switzerland is ______.", 
            type: "fillblank", 
            answer: "German" 
          },
          { 
            question: "The city of Geneva is located in ______.", 
            type: "fillblank", 
            answer: "Switzerland" 
          },
          { 
            question: "The famous landmark, the Atomium, is located in ______.", 
            type: "fillblank", 
            answer: "Brussels" 
          },
          { 
            question: "______ is a small country located between Belgium and Germany.", 
            type: "fillblank", 
            answer: "Luxembourg" 
          },
          { 
            question: "The Eiffel Tower is located in ______.", 
            type: "fillblank", 
            answer: "Paris" 
          },
        
          
              { 
                question: "The capital of France is Paris.", 
                type: "truefalse", 
                answer: "True" 
              },
              { 
                question: "Belgium is famous for its beer and chocolate.", 
                type: "truefalse", 
                answer: "True" 
              },
              { 
                question: "Luxembourg is a large country with a population of over 10 million people.", 
                type: "truefalse", 
                answer: "False" 
              },
              { 
                question: "The Netherlands is known for its extensive canal systems.", 
                type: "truefalse", 
                answer: "True" 
              },
              { 
                question: "Switzerland has four official languages: German, French, Italian, and Spanish.", 
                type: "truefalse", 
                answer: "False" 
              },
              { 
                question: "Brussels is the capital of Belgium and the European Union headquarters.", 
                type: "truefalse", 
                answer: "True" 
              },
              { 
                question: "Germany is known for its extensive wine regions.", 
                type: "truefalse", 
                answer: "True" 
              },
              { 
                question: "Which countries are known for their medieval castles? (Select all that apply)", 
                type: "checkbox", 
                options: ["Austria", "Germany", "Poland", "Spain"], 
                answer: ["Austria", "Germany", "Poland"] 
              },
              { 
                question: "Which countries are part of the Visegrád Group? (Select all that apply)", 
                type: "checkbox", 
                options: ["Hungary", "Poland", "Slovakia", "Romania"], 
                answer: ["Hungary", "Poland", "Slovakia"] 
              },
              { 
                question: "Which countries have the Danube River flowing through them? (Select all that apply)", 
                type: "checkbox", 
                options: ["Austria", "Slovakia", "Serbia", "Croatia"], 
                answer: ["Austria", "Slovakia", "Serbia", "Croatia"] 
              },
              { 
                question: "Which countries have a tradition of producing high-quality wines? (Select all that apply)", 
                type: "checkbox", 
                options: ["Austria", "Hungary", "Poland", "Germany"], 
                answer: ["Austria", "Hungary", "Germany"] 
              },
              { 
                question: "Which countries are known for their vibrant cultural festivals? (Select all that apply)", 
                type: "checkbox", 
                options: ["Austria", "Czech Republic", "Slovakia", "Switzerland"], 
                answer: ["Austria", "Czech Republic", "Slovakia"] 
              },
              { 
                question: "Which Central European countries are landlocked? (Select all that apply)", 
                type: "checkbox", 
                options: ["Hungary", "Slovakia", "Poland", "Czech Republic"], 
                answer: ["Hungary", "Slovakia", "Czech Republic"] 
              },
              { 
                question: "Which countries are famous for their classical music heritage? (Select all that apply)", 
                type: "checkbox", 
                options: ["Austria", "Hungary", "Slovakia", "Italy"], 
                answer: ["Austria", "Hungary"] 
              },
            
                                             
              { 
                  question: "The capital city of Hungary is ______.", 
                  type: "fillblank", 
                  answer: "Budapest" 
                },
                { 
                  question: "______ is known for its beautiful Old Town and historic architecture.", 
                  type: "fillblank", 
                  answer: "Prague" 
                },
                { 
                  question: "The official language of Slovakia is ______.", 
                  type: "fillblank", 
                  answer: "Slovak" 
                },
                { 
                  question: "______ is a country famous for its thermal baths and Budapest.", 
                  type: "fillblank", 
                  answer: "Hungary" 
                },
                { 
                  question: "The main river flowing through Vienna is the ______.", 
                  type: "fillblank", 
                  answer: "Danube" 
                },
                { 
                  question: "______ is known for its wine regions, particularly around the city of Vienna.", 
                  type: "fillblank", 
                  answer: "Austria" 
                },
                { 
                  question: "______ is a landlocked country in Central Europe bordered by Austria, Slovakia, and Hungary.", 
                  type: "fillblank", 
                  answer: "Czech Republic" 
                },
              
             { 
                  question: "The capital of Poland is Warsaw.", 
                  type: "truefalse", 
                  answer: "True" 
                },
                { 
                  question: "Slovakia and Slovenia are the same country.", 
                  type: "truefalse", 
                  answer: "False" 
                },
                { 
                  question: "Austria is known for its traditional music and operas.", 
                  type: "truefalse", 
                  answer: "True" 
                },
                { 
                  question: "Prague is the capital city of Slovakia.", 
                  type: "truefalse", 
                  answer: "False" 
                },
                { 
                  question: "Hungary is famous for its thermal baths and spas.", 
                  type: "truefalse", 
                  answer: "True" 
                },
                { 
                  question: "The official language of Austria is German.", 
                  type: "truefalse", 
                  answer: "True" 
                },
                { 
                  question: "Liechtenstein is a part of the European Union.", 
                  type: "truefalse", 
                  answer: "False" 
                },
                { 
                  question: "Which countries are known for their beautiful Mediterranean coastlines? (Select all that apply)", 
                  type: "checkbox", 
                  options: ["Spain", "Italy", "Portugal", "Sweden"], 
                  answer: ["Spain", "Italy", "Portugal"] 
                },
                { 
                  question: "Which countries have historic cities known for their ancient ruins? (Select all that apply)", 
                  type: "checkbox", 
                  options: ["Italy", "Greece", "Portugal", "Spain"], 
                  answer: ["Italy", "Greece", "Spain"] 
                },
                { 
                  question: "Which countries are known for their wine regions? (Select all that apply)", 
                  type: "checkbox", 
                  options: ["Italy", "Spain", "Portugal", "France"], 
                  answer: ["Italy", "Spain", "Portugal"] 
                },
                { 
                  question: "Which countries have famous tourist destinations such as Barcelona and Madrid? (Select all that apply)", 
                  type: "checkbox", 
                  options: ["Spain", "France", "Portugal", "Italy"], 
                  answer: ["Spain"] 
                },
                { 
                  question: "Which countries are known for their significant contributions to ancient civilizations? (Select all that apply)", 
                  type: "checkbox", 
                  options: ["Greece", "Italy", "Spain", "Cyprus"], 
                  answer: ["Greece", "Italy"] 
                },
                { 
                  question: "Which Southern European countries are islands? (Select all that apply)", 
                  type: "checkbox", 
                  options: ["Cyprus", "Malta", "Greece", "Spain"], 
                  answer: ["Cyprus", "Malta", "Greece"] 
                },
                { 
                  question: "Which countries are part of the Iberian Peninsula? (Select all that apply)", 
                  type: "checkbox", 
                  options: ["Spain", "Portugal", "Andorra", "France"], 
                  answer: ["Spain", "Portugal", "Andorra"] 
                },
              
                { 
                  question: "The capital city of Spain is ______.", 
                  type: "fillblank", 
                  answer: "Madrid" 
                },
                { 
                  question: "______ is known for its beautiful canals and gondola rides.", 
                  type: "fillblank", 
                  answer: "Venice" 
                },
                { 
                  question: "The official language of Greece is ______.", 
                  type: "fillblank", 
                  answer: "Greek" 
                },
                { 
                  question: "______ is an island country located in the Mediterranean Sea.", 
                  type: "fillblank", 
                  answer: "Malta" 
                },
                { 
                  question: "The famous ancient city of Pompeii is located in ______.", 
                  type: "fillblank", 
                  answer: "Italy" 
                },
                { 
                  question: "______ is known for its historic architecture and the Sagrada Família.", 
                  type: "fillblank", 
                  answer: "Barcelona" 
                },
                { 
                  question: "The Mediterranean diet is commonly associated with ______ cuisine.", 
                  type: "fillblank", 
                  answer: "Spanish" 
                },
              
                { 
                  question: "The capital of Portugal is Lisbon.", 
                  type: "truefalse", 
                  answer: "True" 
                },
                { 
                  question: "Greece is known for its ancient city of Rome.", 
                  type: "truefalse", 
                  answer: "False" 
                },
                { 
                  question: "Malta is an island country in the Mediterranean Sea.", 
                  type: "truefalse", 
                  answer: "True" 
                },
                { 
                  question: "San Marino is a large country located in Southern Europe.", 
                  type: "truefalse", 
                  answer: "False" 
                },
                { 
                  question: "Spain is known for its famous culinary dish, paella.", 
                  type: "truefalse", 
                  answer: "True" 
                },
                { 
                  question: "Italy is famous for its Renaissance art and architecture.", 
                  type: "truefalse", 
                  answer: "True" 
                },
                { 
                  question: "The Colosseum is located in Athens.", 
                  type: "truefalse", 
                  answer: "False" 
                },
                { question: "Which country's flag is shown below? <br><img src='flag-of-denmark.jpeg' alt='Flag of Denmark'>", type: "multiple", options: ["Denmark", "Norway", "Sweden"], answer: "Denmark" },
                
                { question: "Which famous place is shown in the image below? <br><img src='blue-lagoon-iceland.jpeg' alt='Blue Lagoon in Iceland'>", type: "multiple", options: ["Blue Lagoon", "Northern Lights", "Royal Palace"], answer: "Blue Lagoon" },
                { question: "Which country's flag is shown below? <br><img src='flag-of-estonia.jpeg' alt='Flag of Estonia'>", type: "multiple", options: ["Estonia", "Latvia", "Lithuania"], answer: "Estonia" },
                
                { question: "Which country's flag is shown below? <br><img src='flag-of-ireland.jpeg' alt='Flag of Ireland'>", type: "multiple", options: ["Ireland", "Finland", "Sweden"], answer: "Ireland" },
                
                  
];



let selectedQuestions = [];
let correctAnswers = 0;

function startTest() {
selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 300000);
displayQuestions();
document.getElementById('instructions').style.display = 'none';
document.getElementById('quiz').style.display = 'block';
}

function displayQuestions() {
const questionsContainer = document.getElementById('questions-container');
questionsContainer.innerHTML = '';
selectedQuestions.forEach((question, index) => {
const questionDiv = document.createElement('div');
questionDiv.classList.add('question');
questionDiv.innerHTML = generateQuestionHTML(question, index);
questionsContainer.appendChild(questionDiv);
});
}

function generateQuestionHTML(question, index) {
switch (question.type) {
case 'truefalse':
return `
<p>${index + 1}. ${question.question}</p>
<label><input type="radio" name="question-${index}" value="true"> True</label>
<label><input type="radio" name="question-${index}" value="false"> False</label>
`;
case 'fillblank':
return `
<p>${index + 1}. ${question.question}</p>
<input type="text" name="question-${index}">
`;
case 'multiple':
return `
<p>${index + 1}. ${question.question}</p>
${question.options.map(option => `
    <label><input type="radio" name="question-${index}" value="${option}"> ${option}</label>
`).join('')}
`;
case 'checkbox':
return `
<p>${index + 1}. ${question.question}</p>
${question.options.map(option => `
    <label><input type="checkbox" name="question-${index}" value="${option}"> ${option}</label>
`).join('')}
`;
default:
return '';
}
}

function submitAnswers() {
correctAnswers = 0;
const corrections = [];
selectedQuestions.forEach((question, index) => {
const userAnswer = getUserAnswer(question, index);
const isCorrect = checkAnswer(question, userAnswer);
if (isCorrect) {
correctAnswers++;
} else {
corrections.push({
question: question.question,
correctAnswer: question.answer,
userAnswer
});
}
});
displayResults(corrections);
}

function getUserAnswer(question, index) {
switch (question.type) {
case 'truefalse':
case 'multiple':
return document.querySelector(`input[name="question-${index}"]:checked`)?.value || '';
case 'fillblank':
return document.querySelector(`input[name="question-${index}"]`).value.trim();
case 'checkbox':
return Array.from(document.querySelectorAll(`input[name="question-${index}"]:checked`)).map(input => input.value);
default:
return '';
}
}

function checkAnswer(question, userAnswer) {
if (Array.isArray(question.answer)) {
return JSON.stringify(question.answer.sort()) === JSON.stringify(userAnswer.sort());
}
return question.answer.toString().toLowerCase() === userAnswer.toString().toLowerCase();
}

function displayResults(corrections) {
document.getElementById('quiz').style.display = 'none';
document.getElementById('results').style.display = 'block';
document.getElementById('score').innerText = `You got ${correctAnswers} out of 30 correct!`;
const correctionsContainer = document.getElementById('corrections');
correctionsContainer.innerHTML = corrections.map(correction => `
<div>
<p>${correction.question}</p>
<p class="${correction.userAnswer.toString().toLowerCase() === correction.correctAnswer.toString().toLowerCase() ? 'correct' : 'incorrect'}">
Your Answer: ${Array.isArray(correction.userAnswer) ? correction.userAnswer.join(', ') : correction.userAnswer}
</p>
<p class="correct">Correct Answer: ${Array.isArray(correction.correctAnswer) ? correction.correctAnswer.join(', ') : correction.correctAnswer}</p>
</div>
`).join('');
}

function restartQuiz() {
document.getElementById('results').style.display = 'none';
document.getElementById('instructions').style.display = 'block';
}
