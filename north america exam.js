const questions = [
      // True or False Questions
      { question: "The United States is the largest country in North America.", type: "truefalse", answer: false },
      { question: "Mexico is south of the United States.", type: "truefalse", answer: true },
      { question: "Canada is the second-largest country in the world by land area.", type: "truefalse", answer: true },
      { question: "Greenland is an independent country.", type: "truefalse", answer: false },
      { question: "The capital of Canada is Ottawa.", type: "truefalse", answer: true },
      { question: "The Caribbean is part of North America.", type: "truefalse", answer: true },
      { question: "Mexico's official language is Portuguese.", type: "truefalse", answer: false },
      { question: "The Mississippi River flows north to south through the United States.", type: "truefalse", answer: true },
      { question: "Alaska is the smallest state in the United States.", type: "truefalse", answer: false },
      { question: "Hawaii is located in the Atlantic Ocean.", type: "truefalse", answer: false },
    
      // Fill in the Blank Questions
      { question: "The capital city of the United States is ____.", type: "fillblank", answer: "Washington, D.C." },
      { question: "The longest river in North America is the ____ River.", type: "fillblank", answer: "Mississippi" },
      { question: "The Great Lakes consist of Lake Superior, Michigan, Huron, Erie, and ____.", type: "fillblank", answer: "Ontario" },
      { question: "The largest island in North America is ____.", type: "fillblank", answer: "Greenland" },
      { question: "The currency of Mexico is the ____.", type: "fillblank", answer: "Peso" },
      { question: "The Rocky Mountains stretch from Canada to ____.", type: "fillblank", answer: "New Mexico" },
      { question: "The ____ Peninsula is located in eastern Mexico.", type: "fillblank", answer: "Yucatan" },
      { question: "The capital city of Mexico is ____.", type: "fillblank", answer: "Mexico City" },
      { question: "The ____ Mountains are the oldest mountain range in North America.", type: "fillblank", answer: "Appalachian" },
      { question: "The state of ____ is known for its vast oil reserves and Arctic climate.", type: "fillblank", answer: "Alaska" },
    
      // Multiple Choice Questions
      { question: "Which of the following countries is NOT part of North America?", type: "multiple", options: ["Canada", "Brazil", "Mexico", "United States"], answer: "Brazil" },
      { question: "What is the largest city in Canada?", type: "multiple", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: "Toronto" },
      { question: "Which country has the largest Spanish-speaking population?", type: "multiple", options: ["Spain", "Argentina", "Mexico", "Colombia"], answer: "Mexico" },
      { question: "Which U.S. state is known as the 'Sunshine State'?", type: "multiple", options: ["California", "Texas", "Florida", "Hawaii"], answer: "Florida" },
      { question: "Which of these cities is located in Mexico?", type: "multiple", options: ["Cancun", "Caracas", "Sao Paulo", "Havana"], answer: "Cancun" },
      { question: "Which U.S. state shares a border with Canada?", type: "multiple", options: ["California", "Texas", "Montana", "Nevada"], answer: "Montana" },
      { question: "The Niagara Falls are located on the border of which two countries?", type: "multiple", options: ["United States and Mexico", "Canada and Mexico", "United States and Canada", "Canada and Greenland"], answer: "United States and Canada" },
      { question: "Which Caribbean island is a territory of the United States?", type: "multiple", options: ["Jamaica", "Haiti", "Puerto Rico", "Cuba"], answer: "Puerto Rico" },
      { question: "Which country is famous for its maple syrup?", type: "multiple", options: ["Mexico", "United States", "Canada", "Cuba"], answer: "Canada" },
      { question: "Which state is the Grand Canyon located in?", type: "multiple", options: ["Utah", "Arizona", "Colorado", "Nevada"], answer: "Arizona" },
    
      // Checkbox Questions
      { question: "Which countries are in North America?", type: "checkbox", options: ["Canada", "Mexico", "United States", "Brazil"], answer: ["Canada", "Mexico", "United States"] },
      { question: "Select the Great Lakes in North America:", type: "checkbox", options: ["Lake Superior", "Lake Victoria", "Lake Huron", "Lake Baikal"], answer: ["Lake Superior", "Lake Huron"] },
      { question: "Which of the following are U.S. states?", type: "checkbox", options: ["California", "Ontario", "Florida", "Quebec"], answer: ["California", "Florida"] },
      { question: "Which countries share a border with the United States?", type: "checkbox", options: ["Canada", "Mexico", "Cuba", "Honduras"], answer: ["Canada", "Mexico"] },
      { question: "Which are the official languages of Canada?", type: "checkbox", options: ["English", "French", "Spanish", "German"], answer: ["English", "French"] },
      { question: "Which of the following are capital cities in North America?", type: "checkbox", options: ["Washington, D.C.", "Ottawa", "Mexico City", "Rio de Janeiro"], answer: ["Washington, D.C.", "Ottawa", "Mexico City"] },
      { question: "Which islands are part of the Caribbean?", type: "checkbox", options: ["Jamaica", "Haiti", "Bermuda", "Cuba"], answer: ["Jamaica", "Haiti", "Cuba"] },
      { question: "Which of these are territories of the United States?", type: "checkbox", options: ["Puerto Rico", "Guam", "Greenland", "Hawaii"], answer: ["Puerto Rico", "Guam"] },
      { question: "Which of the following are part of the Rocky Mountains?", type: "checkbox", options: ["Colorado", "Wyoming", "New Mexico", "Kansas"], answer: ["Colorado", "Wyoming", "New Mexico"] },
      { question: "Which U.S. states are located in the Pacific time zone?", type: "checkbox", options: ["California", "Nevada", "Oregon", "Arizona"], answer: ["California", "Nevada", "Oregon"] },
    
      // Image-Based Questions
      {
          "question": "Which state's flag is shown below? <br><img src='flag-of-alabama.jpeg' alt='Alabama Flag'>",
          "type": "multiple",
          "options": ["Alabama", "Georgia", "Mississippi"],
          "answer": "Alabama"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-alaska.jpeg' alt='Alaska Flag'>",
          "type": "multiple",
          "options": ["Alaska", "Montana", "Oregon"],
          "answer": "Alaska"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-arizona.jpeg' alt='Arizona Flag'>",
          "type": "multiple",
          "options": ["Arizona", "New Mexico", "Nevada"],
          "answer": "Arizona"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-arkansas.jpeg' alt='Arkansas Flag'>",
          "type": "multiple",
          "options": ["Arkansas", "Kentucky", "Tennessee"],
          "answer": "Arkansas"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-california.jpeg' alt='California Flag'>",
          "type": "multiple",
          "options": ["California", "Nevada", "Texas"],
          "answer": "California"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-colorado.jpeg' alt='Colorado Flag'>",
          "type": "multiple",
          "options": ["Colorado", "Wyoming", "Utah"],
          "answer": "Colorado"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-connecticut.jpeg' alt='Connecticut Flag'>",
          "type": "multiple",
          "options": ["Connecticut", "New York", "Rhode Island"],
          "answer": "Connecticut"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-delaware.jpeg' alt='Delaware Flag'>",
          "type": "multiple",
          "options": ["Delaware", "Maryland", "New Jersey"],
          "answer": "Delaware"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-florida.jpeg' alt='Florida Flag'>",
          "type": "multiple",
          "options": ["Florida", "Alabama", "South Carolina"],
          "answer": "Florida"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-georgia.jpeg' alt='Georgia Flag'>",
          "type": "multiple",
          "options": ["Georgia", "Alabama", "Tennessee"],
          "answer": "Georgia"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-hawaii.jpeg' alt='Hawaii Flag'>",
          "type": "multiple",
          "options": ["Hawaii", "Alaska", "California"],
          "answer": "Hawaii"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-idaho.jpeg' alt='Idaho Flag'>",
          "type": "multiple",
          "options": ["Idaho", "Montana", "Wyoming"],
          "answer": "Idaho"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-illinois.jpeg' alt='Illinois Flag'>",
          "type": "multiple",
          "options": ["Illinois", "Indiana", "Iowa"],
          "answer": "Illinois"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-indiana.jpeg' alt='Indiana Flag'>",
          "type": "multiple",
          "options": ["Indiana", "Ohio", "Michigan"],
          "answer": "Indiana"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-iowa.jpeg' alt='Iowa Flag'>",
          "type": "multiple",
          "options": ["Iowa", "Missouri", "Nebraska"],
          "answer": "Iowa"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-kansas.jpeg' alt='Kansas Flag'>",
          "type": "multiple",
          "options": ["Kansas", "Oklahoma", "Nebraska"],
          "answer": "Kansas"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-kentucky.jpeg' alt='Kentucky Flag'>",
          "type": "multiple",
          "options": ["Kentucky", "Tennessee", "West Virginia"],
          "answer": "Kentucky"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-louisiana.jpeg' alt='Louisiana Flag'>",
          "type": "multiple",
          "options": ["Louisiana", "Mississippi", "Arkansas"],
          "answer": "Louisiana"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-maine.jpeg' alt='Maine Flag'>",
          "type": "multiple",
          "options": ["Maine", "Vermont", "New Hampshire"],
          "answer": "Maine"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-maryland.jpeg' alt='Maryland Flag'>",
          "type": "multiple",
          "options": ["Maryland", "Virginia", "Delaware"],
          "answer": "Maryland"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-massachusetts.jpeg' alt='Massachusetts Flag'>",
          "type": "multiple",
          "options": ["Massachusetts", "Rhode Island", "Connecticut"],
          "answer": "Massachusetts"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-michigan.jpeg' alt='Michigan Flag'>",
          "type": "multiple",
          "options": ["Michigan", "Wisconsin", "Minnesota"],
          "answer": "Michigan"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-minnesota.jpeg' alt='Minnesota Flag'>",
          "type": "multiple",
          "options": ["Minnesota", "Wisconsin", "Iowa"],
          "answer": "Minnesota"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-mississippi.jpeg' alt='Mississippi Flag'>",
          "type": "multiple",
          "options": ["Mississippi", "Louisiana", "Arkansas"],
          "answer": "Mississippi"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-missouri.jpeg' alt='Missouri Flag'>",
          "type": "multiple",
          "options": ["Missouri", "Kansas", "Illinois"],
          "answer": "Missouri"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-montana.jpeg' alt='Montana Flag'>",
          "type": "multiple",
          "options": ["Montana", "Idaho", "Wyoming"],
          "answer": "Montana"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-nebraska.jpeg' alt='Nebraska Flag'>",
          "type": "multiple",
          "options": ["Nebraska", "Kansas", "South Dakota"],
          "answer": "Nebraska"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-nevada.jpeg' alt='Nevada Flag'>",
          "type": "multiple",
          "options": ["Nevada", "Utah", "California"],
          "answer": "Nevada"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-new-hampshire.jpeg' alt='New Hampshire Flag'>",
          "type": "multiple",
          "options": ["New Hampshire", "Maine", "Vermont"],
          "answer": "New Hampshire"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-new-jersey.jpeg' alt='New Jersey Flag'>",
          "type": "multiple",
          "options": ["New Jersey", "New York", "Pennsylvania"],
          "answer": "New Jersey"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-new-mexico.jpeg' alt='New Mexico Flag'>",
          "type": "multiple",
          "options": ["New Mexico", "Arizona", "Nevada"],
          "answer": "New Mexico"
        },
        
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-new-york.jpeg' alt='New York Flag'>",
          "type": "multiple",
          "options": ["New York", "New Jersey", "Connecticut"],
          "answer": "New York"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-north-carolina.jpeg' alt='North Carolina Flag'>",
          "type": "multiple",
          "options": ["North Carolina", "South Carolina", "Virginia"],
          "answer": "North Carolina"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-north-dakota.jpeg' alt='North Dakota Flag'>",
          "type": "multiple",
          "options": ["North Dakota", "South Dakota", "Montana"],
          "answer": "North Dakota"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-ohio.jpeg' alt='Ohio Flag'>",
          "type": "multiple",
          "options": ["Ohio", "Indiana", "Michigan"],
          "answer": "Ohio"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-oklahoma.jpeg' alt='Oklahoma Flag'>",
          "type": "multiple",
          "options": ["Oklahoma", "Kansas", "Texas"],
          "answer": "Oklahoma"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-oregon.jpeg' alt='Oregon Flag'>",
          "type": "multiple",
          "options": ["Oregon", "Washington", "Idaho"],
          "answer": "Oregon"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-pennsylvania.jpeg' alt='Pennsylvania Flag'>",
          "type": "multiple",
          "options": ["Pennsylvania", "New York", "New Jersey"],
          "answer": "Pennsylvania"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-rhode-island.jpeg' alt='Rhode Island Flag'>",
          "type": "multiple",
          "options": ["Rhode Island", "Massachusetts", "Connecticut"],
          "answer": "Rhode Island"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-south-carolina.jpeg' alt='South Carolina Flag'>",
          "type": "multiple",
          "options": ["South Carolina", "North Carolina", "Georgia"],
          "answer": "South Carolina"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-south-dakota.jpeg' alt='South Dakota Flag'>",
          "type": "multiple",
          "options": ["South Dakota", "North Dakota", "Nebraska"],
          "answer": "South Dakota"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-tennessee.jpeg' alt='Tennessee Flag'>",
          "type": "multiple",
          "options": ["Tennessee", "Kentucky", "Alabama"],
          "answer": "Tennessee"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-texas.jpeg' alt='Texas Flag'>",
          "type": "multiple",
          "options": ["Texas", "New Mexico", "Oklahoma"],
          "answer": "Texas"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-utah.jpeg' alt='Utah Flag'>",
          "type": "multiple",
          "options": ["Utah", "Nevada", "Colorado"],
          "answer": "Utah"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-vermont.jpeg' alt='Vermont Flag'>",
          "type": "multiple",
          "options": ["Vermont", "Maine", "New Hampshire"],
          "answer": "Vermont"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-virginia.jpeg' alt='Virginia Flag'>",
          "type": "multiple",
          "options": ["Virginia", "West Virginia", "North Carolina"],
          "answer": "Virginia"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-washington.jpeg' alt='Washington Flag'>",
          "type": "multiple",
          "options": ["Washington", "Oregon", "Idaho"],
          "answer": "Washington"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-west-virginia.jpeg' alt='West Virginia Flag'>",
          "type": "multiple",
          "options": ["West Virginia", "Virginia", "Kentucky"],
          "answer": "West Virginia"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-wisconsin.jpeg' alt='Wisconsin Flag'>",
          "type": "multiple",
          "options": ["Wisconsin", "Minnesota", "Michigan"],
          "answer": "Wisconsin"
        },
        {
          "question": "Which state's flag is shown below? <br><img src='flag-of-wyoming.jpeg' alt='Wyoming Flag'>",
          "type": "multiple",
          "options": ["Wyoming", "Montana", "Idaho"],
          "answer": "Wyoming"
        },
      
      
           
            {
              question: "Which UNESCO World Heritage Site is shown below? <br><img src='chichen-itza.jpeg' alt='Chichen Itza'>",
              type: "multiple",
              options: ["Chichen Itza", "Machu Picchu", "Stonehenge"],
              answer: "Chichen Itza"
            },
            {
              question: "What is the capital of Cuba? <br><img src='flag-of-cuba.jpeg' alt='Cuba Flag'>",
              type: "multiple",
              options: ["Havana", "Kingston", "Nassau"],
              answer: "Havana"
            },
            {
              question: "What is the capital of Jamaica? <br><img src='flag-of-jamaica.jpeg' alt='Jamaica Flag'>",
              type: "multiple",
              options: ["Kingston", "Havana", "Santo Domingo"],
              answer: "Kingston"
            },
            {
              question: "What is the capital of Bahamas? <br><img src='flag-of-bahamas.jpeg' alt='Bahamas Flag'>",
              type: "multiple",
              options: ["Nassau", "Port of Spain", "Havana"],
              answer: "Nassau"
            },
            {
              question: "What is the capital of Dominican Republic? <br><img src='flag-of-dominican-republic.jpeg' alt='Dominican Republic Flag'>",
              type: "multiple",
              options: ["Santo Domingo", "Kingston", "Nassau"],
              answer: "Santo Domingo"
            },
            {
              question: "What is the capital of Trinidad and Tobago? <br><img src='flag-of-trinidad-and-tobago.jpeg' alt='Trinidad and Tobago Flag'>",
              type: "multiple",
              options: ["Port of Spain", "Nassau", "Havana"],
              answer: "Port of Spain"
            },
            {
              question: "What is the capital of Guatemala? <br><img src='flag-of-guatemala.jpeg' alt='Guatemala Flag'>",
              type: "multiple",
              options: ["Guatemala City", "Belmopan", "Tegucigalpa"],
              answer: "Guatemala City"
            },
            {
              question: "What is the capital of Belize? <br><img src='flag-of-belize.jpeg' alt='Belize Flag'>",
              type: "multiple",
              options: ["Belmopan", "San Salvador", "Guatemala City"],
              answer: "Belmopan"
            },
            {
              question: "What is the capital of Honduras? <br><img src='flag-of-honduras.jpeg' alt='Honduras Flag'>",
              type: "multiple",
              options: ["Tegucigalpa", "Managua", "San José"],
              answer: "Tegucigalpa"
            },
            {
              question: "What is the capital of El Salvador? <br><img src='flag-of-el-salvador.jpeg' alt='El Salvador Flag'>",
              type: "multiple",
              options: ["San Salvador", "Guatemala City", "Belmopan"],
              answer: "San Salvador"
            },
            {
              question: "What is the capital of Nicaragua? <br><img src='flag-of-nicaragua.jpeg' alt='Nicaragua Flag'>",
              type: "multiple",
              options: ["Managua", "San José", "Panama City"],
              answer: "Managua"
            },
            {
              question: "What is the capital of Costa Rica? <br><img src='flag-of-costa-rica.jpeg' alt='Costa Rica Flag'>",
              type: "multiple",
              options: ["San José", "Tegucigalpa", "Panama City"],
              answer: "San José"
            },
            {
              question: "What is the capital of Panama? <br><img src='flag-of-panama.jpeg' alt='Panama Flag'>",
              type: "multiple",
              options: ["Panama City", "San Salvador", "Managua"],
              answer: "Panama City"
            },
            {
              question: "What is the capital of Aguascalientes? <br><img src='flag-of-aguascalientes.jpeg' alt='Aguascalientes Flag'>",
              type: "multiple",
              options: ["Aguascalientes", "Mexicali", "La Paz"],
              answer: "Aguascalientes"
            },
            {
              question: "What is the capital of Baja California? <br><img src='flag-of-baja-california.jpeg' alt='Baja California Flag'>",
              type: "multiple",
              options: ["Mexicali", "La Paz", "Campeche"],
              answer: "Mexicali"
            },
            {
              question: "What is the capital of Baja California Sur? <br><img src='flag-of-baja-california-sur.jpeg' alt='Baja California Sur Flag'>",
              type: "multiple",
              options: ["La Paz", "Campeche", "Tuxtla Gutiérrez"],
              answer: "La Paz"
            },
            {
              question: "What is the capital of Campeche? <br><img src='flag-of-campeche.jpeg' alt='Campeche Flag'>",
              type: "multiple",
              options: ["Campeche", "Chihuahua", "Saltillo"],
              answer: "Campeche"
            },
            {
              question: "What is the capital of Chiapas? <br><img src='flag-of-chiapas.jpeg' alt='Chiapas Flag'>",
              type: "multiple",
              options: ["Tuxtla Gutiérrez", "Chihuahua", "Saltillo"],
              answer: "Tuxtla Gutiérrez"
            },
            {
              question: "What is the capital of Chihuahua? <br><img src='flag-of-chihuahua.jpeg' alt='Chihuahua Flag'>",
              type: "multiple",
              options: ["Chihuahua", "Saltillo", "Colima"],
              answer: "Chihuahua"
            },
            {
              question: "What is the capital of Coahuila? <br><img src='flag-of-coahuila.jpeg' alt='Coahuila Flag'>",
              type: "multiple",
              options: ["Saltillo", "Colima", "Durango"],
              answer: "Saltillo"
            },
            {
              question: "What is the capital of Colima? <br><img src='flag-of-colima.jpeg' alt='Colima Flag'>",
              type: "multiple",
              options: ["Colima", "Durango", "Guanajuato"],
              answer: "Colima"
            },
            {
              question: "What is the capital of Durango? <br><img src='flag-of-durango.jpeg' alt='Durango Flag'>",
              type: "multiple",
              options: ["Durango", "Guanajuato", "Chilpancingo"],
              answer: "Durango"
            },
            {
              question: "What is the capital of Guanajuato? <br><img src='flag-of-guanajuato.jpeg' alt='Guanajuato Flag'>",
              type: "multiple",
              options: ["Guanajuato", "Chilpancingo", "Pachuca"],
              answer: "Guanajuato"
            },
            {
              question: "What is the capital of Guerrero? <br><img src='flag-of-guerrero.jpeg' alt='Guerrero Flag'>",
              type: "multiple",
              options: ["Chilpancingo", "Pachuca", "Guadalajara"],
              answer: "Chilpancingo"
            },
            {
              question: "What is the capital of Hidalgo? <br><img src='flag-of-hidalgo.jpeg' alt='Hidalgo Flag'>",
              type: "multiple",
              options: ["Pachuca", "Guadalajara", "Toluca"],
              answer: "Pachuca"
            },
            {
              question: "What is the capital of Jalisco? <br><img src='flag-of-jalisco.jpeg' alt='Jalisco Flag'>",
              type: "multiple",
              options: ["Guadalajara", "Toluca", "Morelia"],
              answer: "Guadalajara"
            },
            {
              question: "What is the capital of México? <br><img src='flag-of-mexico.jpeg' alt='México Flag'>",
              type: "multiple",
              options: ["Toluca", "Morelia", "Cuernavaca"],
              answer: "Toluca"
            },
            {
              question: "What is the capital of Michoacán? <br><img src='flag-of-michoacan.jpeg' alt='Michoacán Flag'>",
              type: "multiple",
              options: ["Morelia", "Cuernavaca", "Tepic"],
              answer: "Morelia"
            },
            {
              question: "What is the capital of Morelos? <br><img src='flag-of-morelos.jpeg' alt='Morelos Flag'>",
              type: "multiple",
              options: ["Cuernavaca", "Tepic", "Monterrey"],
              answer: "Cuernavaca"
            },
            {
              question: "What is the capital of Nayarit? <br><img src='flag-of-nayarit.jpeg' alt='Nayarit Flag'>",
              type: "multiple",
              options: ["Tepic", "Monterrey", "Oaxaca de Juárez"],
              answer: "Tepic"
            },
            {
              question: "What is the capital of Nuevo León? <br><img src='flag-of-nuevo-leon.jpeg' alt='Nuevo León Flag'>",
              type: "multiple",
              options: ["Monterrey", "Oaxaca de Juárez", "Puebla City"],
              answer: "Monterrey"
            },
            {
              question: "What is the capital of Oaxaca? <br><img src='flag-of-oaxaca.jpeg' alt='Oaxaca Flag'>",
              type: "multiple",
              options: ["Oaxaca de Juárez", "Puebla City", "Querétaro"],
              answer: "Oaxaca de Juárez"
            },
            {
              question: "What is the capital of Puebla? <br><img src='flag-of-puebla.jpeg' alt='Puebla Flag'>",
              type: "multiple",
              options: ["Puebla City", "Querétaro", "Chetumal"],
              answer: "Puebla City"
            },
            {
              question: "What is the capital of Querétaro? <br><img src='flag-of-queretaro.jpeg' alt='Querétaro Flag'>",
              type: "multiple",
              options: ["Querétaro", "Chetumal", "San Luis Potosí"],
              answer: "Querétaro"
            },
            {
              question: "What is the capital of Quintana Roo? <br><img src='flag-of-quintana-roo.jpeg' alt='Quintana Roo Flag'>",
              type: "multiple",
              options: ["Chetumal", "San Luis Potosí", "Mazatlán"],
              answer: "Chetumal"
            },
            {
              question: "What is the capital of San Luis Potosí? <br><img src='flag-of-san-luis-potosi.jpeg' alt='San Luis Potosí Flag'>",
              type: "multiple",
              options: ["San Luis Potosí", "Mazatlán", "Culiacán"],
              answer: "San Luis Potosí"
            },
            {
              question: "What is the capital of Sinaloa? <br><img src='flag-of-sinaloa.jpeg' alt='Sinaloa Flag'>",
              type: "multiple",
              options: ["Culiacán", "San Luis Potosí", "Hermosillo"],
              answer: "Culiacán"
            },
            {
              question: "What is the capital of Sonora? <br><img src='flag-of-sonora.jpeg' alt='Sonora Flag'>",
              type: "multiple",
              options: ["Hermosillo", "Mazatlán", "Victoria de Durango"],
              answer: "Hermosillo"
            },
            {
              question: "What is the capital of Tabasco? <br><img src='flag-of-tabasco.jpeg' alt='Tabasco Flag'>",
              type: "multiple",
              options: ["Villahermosa", "Saltillo", "Colima"],
              answer: "Villahermosa"
            },
            {
              question: "What is the capital of Tamaulipas? <br><img src='flag-of-tamaulipas.jpeg' alt='Tamaulipas Flag'>",
              type: "multiple",
              options: ["Victoria", "Monterrey", "Oaxaca de Juárez"],
              answer: "Victoria"
            },
            {
              question: "What is the capital of Tlaxcala? <br><img src='flag-of-tlaxcala.jpeg' alt='Tlaxcala Flag'>",
              type: "multiple",
              options: ["Tlaxcala", "San Luis Potosí", "Villahermosa"],
              answer: "Tlaxcala"
            },
            {
              question: "What is the capital of Veracruz? <br><img src='flag-of-veracruz.jpeg' alt='Veracruz Flag'>",
              type: "multiple",
              options: ["Xalapa", "Tlaxcala", "Villahermosa"],
              answer: "Xalapa"
            },
            {
              question: "What is the capital of Yucatán? <br><img src='flag-of-yucatan.jpeg' alt='Yucatán Flag'>",
              type: "multiple",
              options: ["Mérida", "Tlaxcala", "Villahermosa"],
              answer: "Mérida"
            },
            {
              question: "What is the capital of Zacatecas? <br><img src='flag-of-zacatecas.jpeg' alt='Zacatecas Flag'>",
              type: "multiple",
              options: ["Zacatecas", "Tlaxcala", "Villahermosa"],
              answer: "Zacatecas"
            },
            {
              question: "Which country's flag is shown below? <br><img src='flag-of-cuba.jpeg' alt='Cuba Flag'>",
              type: "multiple",
              options: ["Cuba", "Jamaica", "Bahamas"],
              answer: "Cuba"
            },
            {
              question: "Which country's flag is shown below? <br><img src='flag-of-jamaica.jpeg' alt='Jamaica Flag'>",
              type: "multiple",
              options: ["Jamaica", "Cuba", "Dominican Republic"],
              answer: "Jamaica"
            },
            {
              question: "Which country's flag is shown below? <br><img src='flag-of-bahamas.jpeg' alt='Bahamas Flag'>",
              type: "multiple",
              options: ["Bahamas", "Trinidad and Tobago", "Guatemala"],
              answer: "Bahamas"
            },
            {
              question: "Which country's flag is shown below? <br><img src='flag-of-dominican-republic.jpeg' alt='Dominican Republic Flag'>",
              type: "multiple",
              options: ["Dominican Republic", "Jamaica", "Belize"],
              answer: "Dominican Republic"
            },
            {
              question: "Which country's flag is shown below? <br><img src='flag-of-trinidad-and-tobago.jpeg' alt='Trinidad and Tobago Flag'>",
              type: "multiple",
              options: ["Trinidad and Tobago", "Bahamas", "Guatemala"],
              answer: "Trinidad and Tobago"
            },
            {
              question: "Which country's flag is shown below? <br><img src='flag-of-guatemala.jpeg' alt='Guatemala Flag'>",
              type: "multiple",
              options: ["Guatemala", "Belize", "Honduras"],
              answer: "Guatemala"
            },
            {
              question: "Which country's flag is shown below? <br><img src='flag-of-belize.jpeg' alt='Belize Flag'>",
              type: "multiple",
              options: ["Belize", "El Salvador", "Honduras"],
              answer: "Belize"
            },
            {
              question: "Which country's flag is shown below? <br><img src='flag-of-honduras.jpeg' alt='Honduras Flag'>",
              type: "multiple",
              options: ["Honduras", "Guatemala", "El Salvador"],
              answer: "Honduras"
            },
            {
              question: "Which country's flag is shown below? <br><img src='flag-of-el-salvador.jpeg' alt='El Salvador Flag'>",
              type: "multiple",
              options: ["El Salvador", "Nicaragua", "Costa Rica"],
              answer: "El Salvador"
            },
            {
              question: "Which country's flag is shown below? <br><img src='flag-of-nicaragua.jpeg' alt='Nicaragua Flag'>",
              type: "multiple",
              options: ["Nicaragua", "El Salvador", "Costa Rica"],
              answer: "Nicaragua"
            },
            {
              question: "Which country's flag is shown below? <br><img src='flag-of-costa-rica.jpeg' alt='Costa Rica Flag'>",
              type: "multiple",
              options: ["Costa Rica", "Nicaragua", "Panama"],
              answer: "Costa Rica"
            },
            {
              question: "Which country's flag is shown below? <br><img src='flag-of-panama.jpeg' alt='Panama Flag'>",
              type: "multiple",
              options: ["Panama", "Costa Rica", "Mexico"],
              answer: "Panama"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-aguascalientes.jpeg' alt='Aguascalientes Flag'>",
              type: "multiple",
              options: ["Aguascalientes", "Baja California", "Campeche"],
              answer: "Aguascalientes"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-baja-california.jpeg' alt='Baja California Flag'>",
              type: "multiple",
              options: ["Baja California", "Campeche", "Chiapas"],
              answer: "Baja California"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-baja-california-sur.jpeg' alt='Baja California Sur Flag'>",
              type: "multiple",
              options: ["Baja California Sur", "Campeche", "Chiapas"],
              answer: "Baja California Sur"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-campeche.jpeg' alt='Campeche Flag'>",
              type: "multiple",
              options: ["Campeche", "Chiapas", "Chihuahua"],
              answer: "Campeche"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-chiapas.jpeg' alt='Chiapas Flag'>",
              type: "multiple",
              options: ["Chiapas", "Campeche", "Chihuahua"],
              answer: "Chiapas"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-chihuahua.jpeg' alt='Chihuahua Flag'>",
              type: "multiple",
              options: ["Chihuahua", "Coahuila", "Colima"],
              answer: "Chihuahua"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-coahuila.jpeg' alt='Coahuila Flag'>",
              type: "multiple",
              options: ["Coahuila", "Chihuahua", "Colima"],
              answer: "Coahuila"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-colima.jpeg' alt='Colima Flag'>",
              type: "multiple",
              options: ["Colima", "Durango", "Guanajuato"],
              answer: "Colima"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-durango.jpeg' alt='Durango Flag'>",
              type: "multiple",
              options: ["Durango", "Guanajuato", "Guerrero"],
              answer: "Durango"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-guanajuato.jpeg' alt='Guanajuato Flag'>",
              type: "multiple",
              options: ["Guanajuato", "Durango", "Guerrero"],
              answer: "Guanajuato"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-guerrero.jpeg' alt='Guerrero Flag'>",
              type: "multiple",
              options: ["Guerrero", "Hidalgo", "Jalisco"],
              answer: "Guerrero"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-hidalgo.jpeg' alt='Hidalgo Flag'>",
              type: "multiple",
              options: ["Hidalgo", "Jalisco", "México"],
              answer: "Hidalgo"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-jalisco.jpeg' alt='Jalisco Flag'>",
              type: "multiple",
              options: ["Jalisco", "Hidalgo", "México"],
              answer: "Jalisco"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-mexico.jpeg' alt='México Flag'>",
              type: "multiple",
              options: ["México", "Jalisco", "Morelos"],
              answer: "México"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-michoacan.jpeg' alt='Michoacán Flag'>",
              type: "multiple",
              options: ["Michoacán", "México", "Morelos"],
              answer: "Michoacán"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-morelos.jpeg' alt='Morelos Flag'>",
              type: "multiple",
              options: ["Morelos", "Michoacán", "Nayarit"],
              answer: "Morelos"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-nayarit.jpeg' alt='Nayarit Flag'>",
              type: "multiple",
              options: ["Nayarit", "Nuevo León", "Oaxaca"],
              answer: "Nayarit"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-nuevo-leon.jpeg' alt='Nuevo León Flag'>",
              type: "multiple",
              options: ["Nuevo León", "Nayarit", "Oaxaca"],
              answer: "Nuevo León"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-oaxaca.jpeg' alt='Oaxaca Flag'>",
              type: "multiple",
              options: ["Oaxaca", "Nuevo León", "Puebla"],
              answer: "Oaxaca"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-puebla.jpeg' alt='Puebla Flag'>",
              type: "multiple",
              options: ["Puebla", "Querétaro", "San Luis Potosí"],
              answer: "Puebla"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-queretaro.jpeg' alt='Querétaro Flag'>",
              type: "multiple",
              options: ["Querétaro", "Puebla", "San Luis Potosí"],
              answer: "Querétaro"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-quintana-roo.jpeg' alt='Quintana Roo Flag'>",
              type: "multiple",
              options: ["Quintana Roo", "Querétaro", "San Luis Potosí"],
              answer: "Quintana Roo"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-san-luis-potosi.jpeg' alt='San Luis Potosí Flag'>",
              type: "multiple",
              options: ["San Luis Potosí", "Quintana Roo", "Sinaloa"],
              answer: "San Luis Potosí"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-sinaloa.jpeg' alt='Sinaloa Flag'>",
              type: "multiple",
              options: ["Sinaloa", "Sonora", "San Luis Potosí"],
              answer: "Sinaloa"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-sonora.jpeg' alt='Sonora Flag'>",
              type: "multiple",
              options: ["Sonora", "Tabasco", "Tlaxcala"],
              answer: "Sonora"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-tabasco.jpeg' alt='Tabasco Flag'>",
              type: "multiple",
              options: ["Tabasco", "Tamaulipas", "Tlaxcala"],
              answer: "Tabasco"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-tamaulipas.jpeg' alt='Tamaulipas Flag'>",
              type: "multiple",
              options: ["Tamaulipas", "Tlaxcala", "Veracruz"],
              answer: "Tamaulipas"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-tlaxcala.jpeg' alt='Tlaxcala Flag'>",
              type: "multiple",
              options: ["Tlaxcala", "Tamaulipas", "Veracruz"],
              answer: "Tlaxcala"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-veracruz.jpeg' alt='Veracruz Flag'>",
              type: "multiple",
              options: ["Veracruz", "Yucatán", "Zacatecas"],
              answer: "Veracruz"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-yucatan.jpeg' alt='Yucatán Flag'>",
              type: "multiple",
              options: ["Yucatán", "Zacatecas", "Veracruz"],
              answer: "Yucatán"
            },
            {
              question: "Which state's flag is shown below? <br><img src='flag-of-zacatecas.jpeg' alt='Zacatecas Flag'>",
              type: "multiple",
              options: ["Zacatecas", "Yucatán", "Veracruz"],
              answer: "Zacatecas"
            },{
              question: "Which country's flag is shown below? <br><img src='flag-of-bermuda.jpeg' alt='Flag of Bermuda'>",
              type: "multiple",
              options: ["Bermuda", "Bahamas", "Barbados"],
              answer: "Bermuda"
          },
          {
              question: "Which country's flag is shown below? <br><img src='flag-of-greenland.jpeg' alt='Flag of Greenland'>",
              type: "multiple",
              options: ["Greenland", "Iceland", "Norway"],
              answer: "Greenland"
          },
          {
              question: "Which country's flag is shown below? <br><img src='flag-of-bahamas.jpeg' alt='Flag of Bahamas'>",
              type: "multiple",
              options: ["Bahamas", "Bermuda", "Barbados"],
              answer: "Bahamas"
          },
          {
              question: "Which country's flag is shown below? <br><img src='flag-of-iceland.jpeg' alt='Flag of Iceland'>",
              type: "multiple",
              options: ["Iceland", "Greenland", "Norway"],
              answer: "Iceland"
          },
          {
              question: "Which country's flag is shown below? <br><img src='flag-of-denmark.jpeg' alt='Flag of Denmark'>",
              type: "multiple",
              options: ["Denmark", "Greenland", "Sweden"],
              answer: "Denmark"
          },
          {
              question: "Which country's flag is shown below? <br><img src='flag-of-finland.jpeg' alt='Flag of Finland'>",
              type: "multiple",
              options: ["Finland", "Norway", "Sweden"],
              answer: "Finland"
          },
          {
              question: "Which country's flag is shown below? <br><img src='flag-of-norway.jpeg' alt='Flag of Norway'>",
              type: "multiple",
              options: ["Norway", "Iceland", "Greenland"],
              answer: "Norway"
          },
          {
              question: "Which country's flag is shown below? <br><img src='flag-of-canada.jpeg' alt='Flag of Canada'>",
              type: "multiple",
              options: ["Canada", "Greenland", "Norway"],
              answer: "Canada"
          },
          {
              question: "Which country's flag is shown below? <br><img src='flag-of-united-states.jpeg' alt='Flag of the United States'>",
              type: "multiple",
              options: ["United States", "Canada", "Greenland"],
              answer: "United States"
          },
          {
              question: "Which country's flag is shown below? <br><img src='flag-of-mexico.jpeg' alt='Flag of Mexico'>",
              type: "multiple",
              options: ["Mexico", "United States", "Canada"],
              answer: "Mexico"
          },
          {
              question: "Which country's flag is shown below? <br><img src='flag-of-sweden.jpeg' alt='Flag of Sweden'>",
              type: "multiple",
              options: ["Sweden", "Finland", "Norway"],
              answer: "Sweden"
          },
          {
              question: "Which country's flag is shown below? <br><img src='flag-of-germany.jpeg' alt='Flag of Germany'>",
              type: "multiple",
              options: ["Germany", "Denmark", "Norway"],
              answer: "Germany"
          },
      
                        
    
          
      // True or False Questions
      { question: "The Statue of Liberty is located in Los Angeles.", type: "truefalse", answer: false },
      { question: "Greenland is an autonomous territory of Denmark.", type: "truefalse", answer: true },
      { question: "Quebec is the largest province in Canada by area.", type: "truefalse", answer: true },
      { question: "Mount Denali is the highest peak in North America.", type: "truefalse", answer: true },
      { question: "The official language of Belize is English.", type: "truefalse", answer: true },
      { question: "The Gulf of Mexico is located to the east of Florida.", type: "truefalse", answer: false },
      { question: "Hurricanes commonly affect the Caribbean and southeastern United States.", type: "truefalse", answer: true },
      { question: "New York City is the capital of the United States.", type: "truefalse", answer: false },
      { question: "Bermuda is a part of the Caribbean.", type: "truefalse", answer: false },
      { question: "The Colorado River flows through the Grand Canyon.", type: "truefalse", answer: true },
    
      // Fill in the Blank Questions
      { question: "The ____ River forms part of the border between the United States and Mexico.", type: "fillblank", answer: "Rio Grande" },
      { question: "The capital city of Greenland is ____.", type: "fillblank", answer: "Nuuk" },
      { question: "The ____ Mountains are located in eastern North America.", type: "fillblank", answer: "Appalachian" },
      { question: "The largest desert in North America is the ____ Desert.", type: "fillblank", answer: "Chihuahuan" },
      { question: "The capital city of the Bahamas is ____.", type: "fillblank", answer: "Nassau" },
      { question: "The ____ Canal connects the Atlantic and Pacific Oceans.", type: "fillblank", answer: "Panama" },
      { question: "The currency used in Canada is the ____.", type: "fillblank", answer: "Canadian Dollar" },
      { question: "The ____ River is the longest river in Canada.", type: "fillblank", answer: "Mackenzie" },
      { question: "The Caribbean island of ____ is known for its cigars and vintage cars.", type: "fillblank", answer: "Cuba" },
      { question: "The capital city of Cuba is ____.", type: "fillblank", answer: "Havana" },
    
      // Multiple Choice Questions
      { question: "Which U.S. state is known as the 'Lone Star State'?", type: "multiple", options: ["California", "Texas", "Nevada", "Arizona"], answer: "Texas" },
      { question: "Which country is known for its Mayan ruins?", type: "multiple", options: ["Canada", "United States", "Mexico", "Cuba"], answer: "Mexico" },
      { question: "Which U.S. state has the most national parks?", type: "multiple", options: ["California", "Alaska", "Utah", "Arizona"], answer: "California" },
      { question: "Which of these countries does NOT have a coastline on the Caribbean Sea?", type: "multiple", options: ["Mexico", "Belize", "United States", "Canada"], answer: "Canada" },
      { question: "Which of these cities is located in the United States?", type: "multiple", options: ["Toronto", "Los Angeles", "Vancouver", "Montreal"], answer: "Los Angeles" },
      { question: "Which of these islands is the largest in the Caribbean?", type: "multiple", options: ["Cuba", "Jamaica", "Puerto Rico", "Bahamas"], answer: "Cuba" },
      { question: "Which U.S. state is the Grand Canyon located in?", type: "multiple", options: ["Utah", "Arizona", "Colorado", "Nevada"], answer: "Arizona" },
      { question: "Which country is home to the city of Cancun?", type: "multiple", options: ["United States", "Mexico", "Canada", "Cuba"], answer: "Mexico" },
      { question: "Which Caribbean island is known for its rum production?", type: "multiple", options: ["Barbados", "Haiti", "Bahamas", "Jamaica"], answer: "Barbados" },
      { question: "Which state is home to the Yellowstone National Park?", type: "multiple", options: ["California", "Wyoming", "Montana", "Colorado"], answer: "Wyoming" },
    
      // Checkbox Questions
      { question: "Which countries are in Central America?", type: "checkbox", options: ["Mexico", "Belize", "Guatemala", "Panama"], answer: ["Belize", "Guatemala", "Panama"] },
      { question: "Select the national parks located in the United States:", type: "checkbox", options: ["Yellowstone", "Banff", "Grand Canyon", "Yosemite"], answer: ["Yellowstone", "Grand Canyon", "Yosemite"] },
      { question: "Which states are part of the U.S. Midwest?", type: "checkbox", options: ["Ohio", "Illinois", "Texas", "Kansas"], answer: ["Ohio", "Illinois", "Kansas"] },
      { question: "Which Caribbean islands are territories of the United States?", type: "checkbox", options: ["Puerto Rico", "U.S. Virgin Islands", "Guam", "Cuba"], answer: ["Puerto Rico", "U.S. Virgin Islands"] },
      { question: "Which Canadian provinces are located in the east?", type: "checkbox", options: ["Ontario", "Quebec", "Nova Scotia", "British Columbia"], answer: ["Ontario", "Quebec", "Nova Scotia"] },
      { question: "Which of the following are U.S. territories?", type: "checkbox", options: ["Puerto Rico", "Guam", "Virgin Islands", "Greenland"], answer: ["Puerto Rico", "Guam", "Virgin Islands"] },
      { question: "Which countries share a border with the United States?", type: "checkbox", options: ["Canada", "Mexico", "Russia", "Cuba"], answer: ["Canada", "Mexico"] },
      { question: "Which cities are in Canada?", type: "checkbox", options: ["Toronto", "Vancouver", "Montreal", "Boston"], answer: ["Toronto", "Vancouver", "Montreal"] },
      { question: "Which U.S. states are located on the Pacific coast?", type: "checkbox", options: ["California", "Oregon", "Washington", "Nevada"], answer: ["California", "Oregon", "Washington"] },
      { question: "Which islands are part of the Caribbean?", type: "checkbox", options: ["Jamaica", "Haiti", "Puerto Rico", "Bermuda"], answer: ["Jamaica", "Haiti", "Puerto Rico"] },
    
      // Image-Based Questions
      { question: "Which country's flag is shown below? <br><img src='flag-of-canada.jpeg' alt='Flag of Canada'>", type: "multiple", options: ["United States", "Canada", "Mexico"], answer: "Canada" },
      { question: "Which country's flag is shown below? <br><img src='flag-of-united-states.jpeg' alt='Flag of United States'>", type: "multiple", options: ["United States", "Canada", "Mexico"], answer: "United States" },
      { question: "Which country's flag is shown below? <br><img src='flag-of-mexico.jpeg' alt='Flag of Mexico'>", type: "multiple", options: ["United States", "Canada", "Mexico"], answer: "Mexico" },
      { question: "Which country's flag is shown below? <br><img src='flag-of-greenland.jpeg' alt='Flag of Greenland'>", type: "multiple", options: ["Canada", "Greenland", "Mexico"], answer: "Greenland" },
      { question: "Which country's flag is shown below? <br><img src='flag-of-puerto-rico.jpeg' alt='Flag of Puerto Rico'>", type: "multiple", options: ["Cuba", "Puerto Rico", "Dominican Republic"], answer: "Puerto Rico" },
      { question: "Which country's flag is shown below? <br><img src='flag-of-jamaica.jpeg' alt='Flag of Jamaica'>", type: "multiple", options: ["Haiti", "Jamaica", "Bahamas"], answer: "Jamaica" },
      { question: "Which country's flag is shown below? <br><img src='flag-of-cuba.jpeg' alt='Flag of Cuba'>", type: "multiple", options: ["Cuba", "Puerto Rico", "Dominican Republic"], answer: "Cuba" },
      { question: "Which country's flag is shown below? <br><img src='flag-of-haiti.jpeg' alt='Flag of Haiti'>", type: "multiple", options: ["Haiti", "Jamaica", "Bahamas"], answer: "Haiti" },
      { question: "Which country's flag is shown below? <br><img src='flag-of-bahamas.jpeg' alt='Flag of Bahamas'>", type: "multiple", options: ["Haiti", "Bahamas", "Dominican Republic"], answer: "Bahamas" },
      { question: "Which country's flag is shown below? <br><img src='flag-of-dominican-republic.jpeg' alt='Flag of Dominican Republic'>", type: "multiple", options: ["Cuba", "Puerto Rico", "Dominican Republic"], answer: "Dominican Republic" },
    ];  
  
    





let selectedQuestions = [];
let correctAnswers = 0;

function startTest() {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 5000000);
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
    document.getElementById('score').innerText = `You got ${correctAnswers} out of 50 correct!`;
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
