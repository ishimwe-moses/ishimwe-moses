const questions = [
   
    
        {
          question: "Which of the following are major cities in Mexico?",
          type: "checkbox",
          options: ["Mexico City", "Guadalajara", "Monterrey", "Cancun"],
          answer: ["Mexico City", "Guadalajara", "Monterrey"]
        },
        {
          question: "Which of the following countries are part of Central America?",
          type: "checkbox",
          options: ["Guatemala", "Costa Rica", "Panama", "Cuba"],
          answer: ["Guatemala", "Costa Rica", "Panama"]
        },
        {
          question: "Which of the following are Caribbean countries?",
          type: "checkbox",
          options: ["Cuba", "Jamaica", "Bahamas", "Dominican Republic"],
          answer: ["Cuba", "Jamaica", "Bahamas", "Dominican Republic"]
        },
        {
          question: "Which of the following are famous landmarks in Mexico?",
          type: "checkbox",
          options: ["Chichen Itza", "Teotihuacan", "Panama Canal", "Tikal"],
          answer: ["Chichen Itza", "Teotihuacan"]
        },
        {
          question: "Which languages are widely spoken in Mexico, Central America, and the Caribbean?",
          type: "checkbox",
          options: ["Spanish", "English", "French", "Dutch"],
          answer: ["Spanish", "English", "French", "Dutch"]
        },
        {
          question: "Which of the following are states in Mexico?",
          type: "checkbox",
          options: ["Jalisco", "Yucatán", "Nuevo León", "Puebla"],
          answer: ["Jalisco", "Yucatán", "Nuevo León", "Puebla"]
        },
        {
          question: "Which of the following are famous Mexican heroes?",
          type: "checkbox",
          options: ["Benito Juárez", "Frida Kahlo", "Simón Bolívar", "Toussaint Louverture"],
          answer: ["Benito Juárez", "Frida Kahlo"]
        },
        {
          question: "Which of the following are natural wonders in Central America?",
          type: "checkbox",
          options: ["Lake Nicaragua", "Belize Barrier Reef", "Grand Canyon", "Panama Canal"],
          answer: ["Lake Nicaragua", "Belize Barrier Reef", "Panama Canal"]
        },
        {
          question: "Which of the following are UNESCO World Heritage Sites in Mexico?",
          type: "checkbox",
          options: ["Chichen Itza", "Teotihuacan", "Statue of Liberty", "Machu Picchu"],
          answer: ["Chichen Itza", "Teotihuacan"]
        },
        {
          question: "Which of the following are famous for their beaches?",
          type: "checkbox",
          options: ["Cancun", "Bahamas", "Jamaica", "Belize"],
          answer: ["Cancun", "Bahamas", "Jamaica", "Belize"]
        },
       
            {
              question: "The capital city of Mexico is ____.",
              type: "fillblank",
              answer: "Mexico City"
            },
            {
              question: "The Panama Canal is one of the most important waterways in the world, located in ____.",
              type: "fillblank",
              answer: "Panama"
            },
            {
              question: "The birthplace of reggae music is ____.",
              type: "fillblank",
              answer: "Jamaica"
            },
            {
              question: "The ancient civilization known for its ruins at Chichen Itza is the ____.",
              type: "fillblank",
              answer: "Maya"
            },
            {
              question: "The largest country by area in Central America is ____.",
              type: "fillblank",
              answer: "Nicaragua"
            },
            {
              question: "The capital of Cuba, known for its music and history, is ____.",
              type: "fillblank",
              answer: "Havana"
            },
            {
              question: "The capital city of Belize is ____.",
              type: "fillblank",
              answer: "Belmopan"
            },
            {
              question: "The vibrant city of Monterrey is located in the Mexican state of ____.",
              type: "fillblank",
              answer: "Nuevo León"
            },
            {
              question: "The main language spoken in Mexico is ____.",
              type: "fillblank",
              answer: "Spanish"
            },
            {
              question: "The oldest city in the Americas, located in the Dominican Republic, is ____.",
              type: "fillblank",
              answer: "Santo Domingo"
            },
            {
              question: "The famous Mayan ruins of Tikal are located in ____.",
              type: "fillblank",
              answer: "Guatemala"
            },
            {
              question: "The Yucatán Peninsula in Mexico is famous for its ____ ruins.",
              type: "fillblank",
              answer: "Mayan"
            },
        
        
            {
              question: "What is the capital city of Mexico?",
              type: "multiple",
              options: ["Mexico City", "Guadalajara", "Cancun", "Monterrey"],
              answer: "Mexico City"
            },
            {
              question: "Which country in Central America is known for the Panama Canal?",
              type: "multiple",
              options: ["Costa Rica", "Honduras", "Panama", "Guatemala"],
              answer: "Panama"
            },
            {
              question: "Which of the following countries is the largest in the Caribbean by area?",
              type: "multiple",
              options: ["Jamaica", "Cuba", "Bahamas", "Dominican Republic"],
              answer: "Cuba"
            },
            {
              question: "Which ancient civilization is known for the ruins at Chichen Itza?",
              type: "multiple",
              options: ["Aztec", "Maya", "Inca", "Olmec"],
              answer: "Maya"
            },
            {
              question: "What is the main language spoken in Belize?",
              type: "multiple",
              options: ["Spanish", "English", "French", "Dutch"],
              answer: "English"
            },
            {
              question: "Which country in Central America has the largest lake, known as Lake Nicaragua?",
              type: "multiple",
              options: ["Honduras", "Guatemala", "Nicaragua", "El Salvador"],
              answer: "Nicaragua"
            },
            {
              question: "Which Caribbean island is famous for its old cars and vibrant culture?",
              type: "multiple",
              options: ["Bahamas", "Cuba", "Trinidad and Tobago", "Jamaica"],
              answer: "Cuba"
            },
            {
              question: "What is the capital city of the Dominican Republic?",
              type: "multiple",
              options: ["Havana", "Santo Domingo", "Kingston", "Port of Spain"],
              answer: "Santo Domingo"
            },
            {
              question: "In which Mexican state is the city of Guadalajara located?",
              type: "multiple",
              options: ["Jalisco", "Yucatán", "Nuevo León", "Puebla"],
              answer: "Jalisco"
            },
            {
              question: "Which Central American country is known for having no army?",
              type: "multiple",
              options: ["Panama", "Costa Rica", "Belize", "El Salvador"],
              answer: "Costa Rica"
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
            }
                        
    
      

];


let selectedQuestions = [];
let correctAnswers = 0;

function startTest() {
    selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 20);
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
    document.getElementById('score').innerText = `You got ${correctAnswers} out of 20 correct!`;
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
