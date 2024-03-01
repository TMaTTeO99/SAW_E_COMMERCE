
export const catalogo = {

	//a = [uomo, donna, bambio]
	//b = [pantalone, maglia, scarpe]
	
	//a.contains(input)
	//b.contains(input)

	//input = elagante donna

	//pantalone bianco elegante uomo
	//pantalone bianco elegante uomo
	//pantalone bianco elegante donna
	//pantalone bianco elegante bambino
	//pantalone elegante

	pantaloni : {

		//donne
		donna : [
			{
			  description : ["marrone", "cotone", "elegante", "48", "pantaloni"],	
				genere: "donna",
			  name : "ptd1.jpeg",
			  url : "Catalogo/IMG/ptd1.jpeg",
			  prezzo  : "30€",
			  disp : "si",
			  quantita : 10,
			  genere: "donna"
			},
			{
			  
			  description : ["nero", "cotone", "elegante", "48", "pantaloni"],
			  genere: "donna",
			  name : "ptd2.jpeg",
			  url : "Catalogo/IMG/ptd2.jpeg",
			  prezzo  : "35€",
			  disp : "si",
			  quantita : 10,
			  genere: "donna"
			},
			{
				description : ["rosa", "poliestere", "elegante", "48", "pantaloni"],
			  name : "ptd3.jpeg",
			  url  : "Catalogo/IMG/ptd3.jpeg",
			  genere: "donna",
			  prezzo  : "30€",
			  disp : "si",
			  quantita : 10,
			  genere: "donna"
			 
			}
		],
		uomo : [
			{	
				description : ["verde", "cotone", "casual", "48", "pantaloni"],
				name : "pt1.jpeg",
				genere: "uomo",
				  url : "Catalogo/IMG/pt1.jpeg",
				  prezzo : "30€",	
				  disp : "si",
				quantita : 10 ,
				genere:"uomo"
			
			},
			{
				description : ["grigio", "", "casual", "48", "pantaloni"],
				name : "pt2.jpeg",
				genere: "uomo",
				url : "Catalogo/IMG/pt2.jpeg",
				prezzo : "35€",
				genere:"uomo",
				disp : "si",
				quantita : 10,
				
			},
			{
				description : ["grigio", "", "casual", "48", "pantaloni"],
				  name : "pt3.jpeg",
				  url  : "Catalogo/IMG/pt3.jpeg",
				  prezzo  : "30€",
				  genere: "uomo",
				  disp : "si",
				quantita : 10,
				genere:"uomo"
			
			},
			{
				description : ["nero", "cotone", "elegante", "48", "pantaloni"],
			  name : "pt4.jpeg",
			  url  : "Catalogo/IMG/pt4.jpeg",
			  prezzo  : "30€",
			  genere:"uomo",
			  disp : "si",
			  quantita : 10,
	
			},
			{
				description : ["verde", "poliestere", "casual", "48", "pantaloni"],
			  name : "pt5.jpeg",
			  url  : "Catalogo/IMG/pt5.jpeg",
			  prezzo  : "30€",
			  genere:"uomo",
			  disp : "si",
			  quantita : 10,
	
			},
			{
				description : ["marrone", "cotone", "casual", "48", "pantaloni"],
			  name : "pt6.jpeg",
			  url  : "Catalogo/IMG/pt6.jpeg",
			  prezzo  : "30€",
			  genere:"uomo",
			  disp : "si",
			  quantita : 10,
			  
			},
			{
				description : ["nero", "", "sportivo", "48", "pantaloni"],
			  name : "pt7.jpeg",
			  url  : "Catalogo/IMG/pt7.jpeg",
			  prezzo  : "30€",
			  genere:"uomo",
			  disp : "si",
			  quantita : 10,
	
			},
			{
				description : ["marrone", "", "casual", "48", "pantaloni"],
			  name : "pt8.jpeg",
			  url  : "Catalogo/IMG/pt8.jpeg",
			  prezzo  : "30€",
			  genere:"uomo",
			  disp : "si",
			  quantita : 10,
			
			}
		],
		bambino : [
			{
				description : ["nero", "tela", "sportivo", "3 anni", "pantaloni"],
				name : "ptb1.jpeg",
				url : "Catalogo/IMG/ptb1.jpeg",
				prezzo  : "20€",
				genere:  "bambino",
				disp : "si",
				quantita : 10,
				
			  },
			  {
				description : ["rosa", "", "sportivo", "4 anni", "pantaloni"],
				name : "ptb2.jpeg",
				url : "Catalogo/IMG/ptb2.jpeg",
				prezzo  : "25€",
				genere:  "bambino",
				disp : "si",
				quantita : 10,
	
			  },
			  {
				description : ["grigio", "", "elegante", "5 anni", "pantaloni"],
				name : "ptb3.jpeg",
				url  : "Catalogo/IMG/ptb3.jpeg",
				prezzo  : "20€",
				genere:  "bambino",
			
				disp : "si",
				quantita : 10,
			
			  }
		]
	},
	scarpe : {

		donna: [
			{
				description : ["grigio", "", "elegante", "38", "scarpe"],
				name : "scd1.jpeg",
				url : "Catalogo/IMG/scd1.jpeg",
				prezzo  : "80€",
				genere:  "donna",
				disp : "si",
				quantita : 10,
		
			  },
			  {
				description : ["nero", "cuoio", "elegante", "39", "scarpe"],
				name : "scd2.jpeg",
				url : "Catalogo/IMG/scd2.jpeg",
				prezzo  : "90€",
				genere:  "donna",
				disp : "si",
				quantita : 10,
				
			  },
			  {
				description : ["nero", "tela", "sportivo", "40", "scarpe"],
				name : "scd3.jpeg",
				url  : "Catalogo/IMG/scd3.jpeg",
				prezzo  : "50€",
				genere:  "donna",
				disp : "si",
				quantita : 10,
				
			  }
		],
		uomo: [
			{

				description : ["bianco", "tela", "sportivo", "42", "scarpe"],
				name : "sc1.jpeg",
				url : "Catalogo/IMG/sc1.jpeg",
				prezzo  : "80€",
				genere:  "uomo",
				disp : "si",
				quantita : 10,
			
			  },
			  {
				description : ["bianco", "tela", "sportivo", "45", "scarpe"],
				name : "sc2.jpeg",
				url : "Catalogo/IMG/sc2.jpeg",
				prezzo  : "90€",
				genere:  "uomo",
				disp : "si",
				quantita : 10,
			
			  },
			  {
				description : ["bianco", "tela", "sportivo", "44", "scarpe"],
				name : "sc3.jpeg",
				url  : "Catalogo/IMG/sc3.jpeg",
				prezzo  : "50€",
				genere:  "uomo",
				disp : "si",
				quantita : 10,
		
			  }
		],
		bambino: [
			{
				description : ["nero", "tela", "sportivo", "27", "scarpe"],
				name : "scb1.jpeg",
				url : "Catalogo/IMG/scb1.jpeg",
				prezzo  : "25€",
				genere:  "bambino",
				disp : "si",
				quantita : 10,
			
			  },
			  {
				description : ["bianche", "tela", "sportivo", "28", "scarpe"],
				name : "scb2.jpeg",
				url : "Catalogo/IMG/scb2.jpeg",
				prezzo  : "30€",
				genere:  "bambino",
				disp : "si",
				quantita : 10,
				
			  },
			  {
				description : ["blue", "tela", "sportivo", "29", "scarpe"],
				name : "scb3.jpeg",
				url  : "Catalogo/IMG/scb3.jpeg",
				prezzo  : "25€",
				genere:  "bambino",
				disp : "si",
				quantita : 10,
			
			  }

		]

	},
	maglie : {

		donna: [
			{
				description : ["azzurro", "cotone", "casual", "S", "maglie"],
				name : "mgd1.jpeg",
				url : "Catalogo/IMG/mgd1.jpeg",
				prezzo  : "30€",
				genere:  "donna",
				disp : "si",
				quantita : 10,
			
			  },
			  {
				description : ["rosa", "cotone", "casual", "M", "maglie"],
				name : "mgd2.jpeg",
				url : "Catalogo/IMG/mgd2.jpeg",
				prezzo  : "35€",
				genere:  "donna",
				disp : "si",
				quantita : 10,
		
			  },
			  {
				description : ["grigio", "cotone", "elegante", "L", "maglie"],
				name : "mgd3.jpeg",
				url  : "Catalogo/IMG/mgd3.jpeg",
				prezzo  : "30€",
				genere:  "donna",
				disp : "si",
				quantita : 10,
			
			  }
		],
		uomo: [
			{
				description : ["nera", "cotone", "elegante", "M", "maglie"],
				name : "mg1.jpeg",
				url : "Catalogo/IMG/mg1.jpeg",
				prezzo  : "30€",
				genere:  "uomo",
				disp : "si",
				quantita : 10,
				
			  },
			  {
				description : ["marrone", "cotone", "casual", "L", "maglie"],
				name : "mg2.jpeg",
				url : "Catalogo/IMG/mg2.jpeg",
				prezzo  : "35€",
				genere:  "uomo",
				disp : "si",
				quantita : 10,
			
			  },
			  {
				description : ["bianca", "cotone", "casual", "S", "maglie"],
				name : "mg3.jpeg",
				url  : "Catalogo/IMG/mg3.jpeg",
				prezzo  : "30€",
				genere:  "uomo",
				disp : "si",
				quantita : 10,
			
			  }
		],
		bambino: [
			{
				description : ["bianca", "cotone", "sportivo", "3 anni", "maglie"],
				name : "mgb1.jpeg",
				url : "Catalogo/IMG/mgb1.jpeg",
				prezzo  : "15€",
				taglia : "3 anni",
				disp : "si",
				quantita : 10,
				genere:  "bambino",
			
			  },
			  {
				description : ["blue", "cotone", "sportivo", "4 anni", "maglie"],
				name : "mgb2.jpeg",
				url : "Catalogo/IMG/mgb2.jpeg",
				prezzo  : "20€",
				genere:  "bambino",
				disp : "si",
				quantita : 10,
		
			  },
			  {
				description : ["rosa", "cotone", "sportivo", "5 anni", "maglie"],
				name : "mgb3.jpeg",
				url  : "Catalogo/IMG/mgb3.jpeg",
				prezzo  : "15€",
				genere:  "bambino",
				disp : "si",
				quantita : 10,
		
			  }

		]

	}

}


/*
export const catalogo = {
	uomo : {
	  pantaloni : [

		{	
			name : "pt1.jpeg",
		  	url : "Catalogo/IMG/pt1.jpeg",
		  	prezzo : "30€",
		  	taglia : "M",
		  	disp : "si",
			quantita : 10 ,
			colore  : "verde",
			materiale : "cotone" , 
			stile : "casual"
		},
		{
			name : "pt2.jpeg",
			url : "Catalogo/IMG/pt2.jpeg",
			prezzo : "35€",
			taglia : "L",
			disp : "si",
			quantita : 10,
			colore : "grigio",
			materiale : "" , 
			stile : "casual"
		},
		{
		  	name : "pt3.jpeg",
		  	url  : "Catalogo/IMG/pt3.jpeg",
		  	prezzo  : "30€",
		  	taglia : "S",
		  	disp : "si",
			quantita : 10,
			colore : "grigio",
			materiale : "" , 
			stile : "casual"
		},
		{
		  name : "pt4.jpeg",
		  url  : "Catalogo/IMG/pt4.jpeg",
		  prezzo  : "30€",
		  taglia : "M",
		  disp : "si",
		  quantita : 10,
		  colore : "nero",
		  materiale : "cotone" , 
		  stile : "elegante"
		},
		{
		  name : "pt5.jpeg",
		  url  : "Catalogo/IMG/pt5.jpeg",
		  prezzo  : "30€",
		  taglia : "L",
		  disp : "si",
		  quantita : 10,
		  colore : "verde",
		  materiale : "poliestere" , 
		  stile : "casual"
		},
		{
		  name : "pt6.jpeg",
		  url  : "Catalogo/IMG/pt6.jpeg",
		  prezzo  : "30€",
		  taglia : "M",
		  disp : "si",
		  quantita : 10,
		  colore : "marrone",
		  materiale : "cotone" , 
		  stile : "casual"
		},
		{
		  name : "pt7.jpeg",
		  url  : "Catalogo/IMG/pt7.jpeg",
		  prezzo  : "30€",
		  taglia : "S",
		  disp : "si",
		  quantita : 10,
		  colore : "nero",
		  materiale : "" , 
		  stile : "sportivo"
		},
		{
		  name : "pt8.jpeg",
		  url  : "Catalogo/IMG/pt8.jpeg",
		  prezzo  : "30€",
		  taglia : "M",
		  disp : "si",
		  quantita : 10,
		  colore : "marrone",
		  materiale : "" , 
		  stile : "casual"
		},
	  ],
	  maglie : [
		{
		  name : "mg1.jpeg",
		  url : "Catalogo/IMG/mg1.jpeg",
		  prezzo  : "30€",
		  taglia : "M",
		  disp : "si",
		  quantita : 10,
		  colore : "nera",
		  materiale : "cotone" , 
		  stile : "elegante"
		},
		{
		  name : "mg2.jpeg",
		  url : "Catalogo/IMG/mg2.jpeg",
		  prezzo  : "35€",
		  taglia : "L",
		  disp : "si",
		  quantita : 10,
		  colore : "marrone",
		  materiale : "cotone" , 
		  stile : "casual"
		},
		{
		  name : "mg3.jpeg",
		  url  : "Catalogo/IMG/mg3.jpeg",
		  prezzo  : "30€",
		  taglia : "S",
		  disp : "si",
		  quantita : 10,
		  colore : "bianca",
		  materiale : "cotone" , 
		  stile : "casual"
		}
	  ],
	  scarpe : [
		{
		  name : "sc1.jpeg",
		  url : "Catalogo/IMG/sc1.jpeg",
		  prezzo  : "80€",
		  taglia : "42",
		  disp : "si",
		  quantita : 10,
		  colore : "bianco",
		  materiale : "tela" , 
		  stile : "sportivo"
		},
		{
		  name : "sc2.jpeg",
		  url : "Catalogo/IMG/sc2.jpeg",
		  prezzo  : "90€",
		  taglia : "43",
		  disp : "si",
		  quantita : 10,
		  colore : "bianco",
		  materiale : "tela" , 
		  stile : "sportivo"
		},
		{
		  name : "sc3.jpeg",
		  url  : "Catalogo/IMG/sc3.jpeg",
		  prezzo  : "50€",
		  taglia : "44",
		  disp : "si",
		  quantita : 10,
		  colore : "nero",
		  materiale : "tela" , 
		  stile : "sportivo"
		}
	  ]
	},
	donna : {
	  pantaloni : [
		{
		  name : "ptd1.jpeg",
		  url : "Catalogo/IMG/ptd1.jpeg",
		  prezzo  : "30€",
		  taglia : "S",
		  disp : "si",
		  quantita : 10,
		  colore : "marrone",
		  materiale : "cotone" , 
		  stile : "elegante"
		},
		{
		  name : "ptd2.jpeg",
		  url : "Catalogo/IMG/ptd2.jpeg",
		  prezzo  : "35€",
		  taglia : "M",
		  disp : "si",
		  quantita : 10,
		  colore : "nero",
		  materiale : "cotone" , 
		  stile : "elegante"
		},
		{
		  name : "ptd3.jpeg",
		  url  : "Catalogo/IMG/ptd3.jpeg",
		  prezzo  : "30€",
		  taglia : "L",
		  disp : "si",
		  quantita : 10,
		  colore : "rosa",
		  materiale : "poliestere" , 
		  stile : "elegante"
		}
	  ],
	  maglie : [
		{
		  name : "mgd1.jpeg",
		  url : "Catalogo/IMG/mgd1.jpeg",
		  prezzo  : "30€",
		  taglia : "S",
		  disp : "si",
		  quantita : 10,
		  colore : "azzurro",
		  materiale : "cotone" , 
		  stile : "casual"
		},
		{
		  name : "mgd2.jpeg",
		  url : "Catalogo/IMG/mgd2.jpeg",
		  prezzo  : "35€",
		  taglia : "M",
		  disp : "si",
		  quantita : 10,
		  colore : "rosa",
		  materiale : "cotone" , 
		  stile : "casual"
		},
		{
		  name : "mgd3.jpeg",
		  url  : "Catalogo/IMG/mgd3.jpeg",
		  prezzo  : "30€",
		  taglia : "L",
		  disp : "si",
		  quantita : 10,
		  colore : "grigio",
		  materiale : "cotone" , 
		  stile : "elegante"
		}
	  ],
	  scarpe : [
		{
		  name : "scd1.jpeg",
		  url : "Catalogo/IMG/scd1.jpeg",
		  prezzo  : "80€",
		  taglia : "38",
		  disp : "si",
		  quantita : 10,
		  colore : "grigio",
		  materiale : "" , 
		  stile : "elegante"
		},
		{
		  name : "scd2.jpeg",
		  url : "Catalogo/IMG/scd2.jpeg",
		  prezzo  : "90€",
		  taglia : "39",
		  disp : "si",
		  quantita : 10,
		  colore : "nero",
		  materiale : "cuoio" , 
		  stile : "elegante"
		},
		{
		  name : "scd3.jpeg",
		  url  : "Catalogo/IMG/scd3.jpeg",
		  prezzo  : "50€",
		  taglia : "40",
		  disp : "si",
		  quantita : 10,
		  colore : "nero",
		  materiale : "tela" , 
		  stile : "sportivo"
		}
	  ]
	},
	bambino : {
	  pantaloni : [
		{
		  name : "ptb1.jpeg",
		  url : "Catalogo/IMG/ptb1.jpeg",
		  prezzo  : "20€",
		  taglia : "3 anni",
		  disp : "si",
		  quantita : 10,
		  colore : "nero",
		  materiale : "tela" , 
		  stile : "sportivo"
		},
		{
		  name : "ptb2.jpeg",
		  url : "Catalogo/IMG/ptb2.jpeg",
		  prezzo  : "25€",
		  taglia : "4 anni",
		  disp : "si",
		  quantita : 10,
		  colore : "rosa",
		  materiale : "" , 
		  stile : "sportivo"
		},
		{
		  name : "ptb3.jpeg",
		  url  : "Catalogo/IMG/ptb3.jpeg",
		  prezzo  : "20€",
		  taglia : "5 anni",
		  disp : "si",
		  quantita : 10,
		  colore : "grigio",
		  materiale : "none", 
		  stile : "elegante"
		}
	  ],
	  maglie : [
		{
		  name : "mgb1.jpeg",
		  url : "Catalogo/IMG/mgb1.jpeg",
		  prezzo  : "15€",
		  taglia : "3 anni",
		  disp : "si",
		  quantita : 10,
		  colore : "bianco",
		  materiale : "cotone" , 
		  stile : "sportivo"
		},
		{
		  name : "mgb2.jpeg",
		  url : "Catalogo/IMG/mgb2.jpeg",
		  prezzo  : "20€",
		  taglia : "4 anni",
		  disp : "si",
		  quantita : 10,
		  colore : "blue",
		  materiale : "cotone" , 
		  stile : "sportivo"
		},
		{
		  name : "mgb3.jpeg",
		  url  : "Catalogo/IMG/mgb3.jpeg",
		  prezzo  : "15€",
		  taglia : "5 anni",
		  disp : "si",
		  quantita : 10,
		  colore : "rosa",
		  materiale : "cotone" , 
		  stile : "sportivo"
		}
	  ],
	  scarpe : [
		{
		  name : "scb1.jpeg",
		  url : "Catalogo/IMG/scb1.jpeg",
		  prezzo  : "25€",
		  taglia : "27",
		  disp : "si",
		  quantita : 10,
		  colore : "nero",
		  materiale : "tela" , 
		  stile : "sportivo"
		},
		{
		  name : "scb2.jpeg",
		  url : "Catalogo/IMG/scb2.jpeg",
		  prezzo  : "30€",
		  taglia : "28",
		  disp : "si",
		  quantita : 10,
		  colore : "bianche",
		  materiale : "tela" , 
		  stile : "sportivo"
		},
		{
		  name : "scb3.jpeg",
		  url  : "Catalogo/IMG/scb3.jpeg",
		  prezzo  : "25€",
		  taglia : "29",
		  disp : "si",
		  quantita : 10,
		  colore : "blue",
		  materiale : "tela" , 
		  stile : "sportivo"
		}
	  ]
	}
  }
/*export const catalogo = {

	uomo  : {
		
		pantaloni  : [
			{
				name : "pt1.jpeg" ,
				url : "Catalogo/IMG/pt1.jpeg",
				prezzo  : "30€"
			},
			{
				name : "pt2.jpeg",
				url : "Catalogo/IMG/pt2.jpeg",
				prezzo  : "35€"
			},
			{
				name : "pt3.jpeg",
				url  : "Catalogo/IMG/pt3.jpeg",
				prezzo  : "30€"
			},
			{
				name : "pt4.jpeg",
				url  : "Catalogo/IMG/pt4.jpeg",
				prezzo  : "30€"
			},
			{
				name : "pt5.jpeg",
				url  : "Catalogo/IMG/pt5.jpeg",
				prezzo  : "30€"
			},
			{
				name: "pt6.jpeg",
				url : "Catalogo/IMG/pt6.jpeg",
				prezzo : "30€"
			},
			{
				name: "pt7.jpeg",
				url : "Catalogo/IMG/pt7.jpeg",
				prezzo : "30€"
			},
			{
				name: "pt8.jpeg",
				url : "Catalogo/IMG/pt8.jpeg",
				prezzo : "30€"
			},
		],
		maglie : [

			{
				name: "mg1.jpeg",
				url: "Catalogo/IMG/mg1.jpeg",
				prezzo : "30€"
			},
			{
				name: "mg2.jpeg",
				url: "Catalogo/IMG/mg2.jpeg",
				prezzo : "35€"
			},
			{
				name: "mg3.jpeg",
				url : "Catalogo/IMG/mg3.jpeg",
				prezzo : "30€"
			}
		],
		scarpe : [

			{
				name: "sc1.jpeg",
				url: "Catalogo/IMG/sc1.jpeg",
				prezzo : "80€"
			},
			{
				name: "sc2.jpeg",
				url: "Catalogo/IMG/sc2.jpeg",
				prezzo : "90€"
			},
			{
				name: "sc3.jpeg",
				url : "Catalogo/IMG/sc3.jpeg",
				prezzo : "50€"
			}
		]
	},
	donna : {

		pantaloni : [
			{
				name: "ptd1.jpeg",
				url: "Catalogo/IMG/ptd1.jpeg",
				prezzo : "30€"
			},
			{
				name: "ptd2.jpeg",
				url: "Catalogo/IMG/ptd2.jpeg",
				prezzo : "35€"
			},
			{
				name: "ptd3.jpeg",
				url : "Catalogo/IMG/ptd3.jpeg",
				prezzo : "30€"
			}
			
		],
		maglie : [

			{
				name: "mgd1.jpeg",
				url: "Catalogo/IMG/mgd1.jpeg",
				prezzo : "30€"
			},
			{	
				name: "mgd2.jpeg",
				url: "Catalogo/IMG/mgd2.jpeg",
				prezzo : "35€"
			},
			{
				name: "mgd3.jpeg",
				url : "Catalogo/IMG/mgd3.jpeg",
				prezzo : "30€"
			}
		],
		scarpe : [

			{
				name: "scd1.jpeg",
				url: "Catalogo/IMG/scd1.jpeg",
				prezzo : "80€"
			},
			{
				name: "scd2.jpeg",
				url: "Catalogo/IMG/scd2.jpeg",
				prezzo : "90€"
			},
			{
				name: "scd3.jpeg",
				url : "Catalogo/IMG/scd3.jpeg",
				prezzo : "50€"
			}
		]
	},
	bambini : {

		pantaloni : [


		],
		maglie : [


		],
		scarpe : [


		]
	}

}*/
export const Preview = {

	prodotti : [
		{
			name: "pt7.jpeg",
			description : ["nero", "", "sportivo", "48", "pantaloni"],
			prezzo  : "30€",
			genere:"uomo",
			disp : "si",
			quantita : 10,
			url : "Preview/pt7.jpeg",
		},
		{
			description : ["marrone", "cotone", "elegante", "48", "pantaloni"],	
			genere: "donna",
		  	prezzo  : "30€",
		  	disp : "si",
		  	quantita : 10,
			name: "ptd1.jpeg",
			url: "Preview/ptd1.jpeg",
		},
		{
			description : ["marrone", "", "casual", "48", "pantaloni"],
			  prezzo  : "30€",
			  genere:"uomo",
			  disp : "si",
			  quantita : 10,
			name: "pt8.jpeg",
			url : "Preview/pt8.jpeg",
		},
		{
			description : ["nero", "cotone", "elegante", "48", "pantaloni"],
			genere: "donna",
			prezzo  : "35€",
			disp : "si",
			quantita : 10,
			genere: "donna",
			name: "ptd2.jpeg",
			url: "Preview/ptd2.jpeg",
		},
		{
			description : ["bianca", "cotone", "casual", "S", "maglie"],
			prezzo  : "30€",
			genere:  "uomo",
			disp : "si",
			quantita : 10,
			name: "mg3.jpeg",
			url: "Preview/mg3.jpeg",
		},
		{
			description : ["bianco", "tela", "sportivo", "42", "scarpe"],
				
				prezzo  : "80€",
				genere:  "uomo",
				disp : "si",
				quantita : 10,
			name: "sc1.jpeg",
			url: "Preview/sc1.jpeg",
		},
		{

			description : ["azzurro", "cotone", "casual", "S", "maglie"],
			prezzo  : "30€",
			genere:  "donna",
			disp : "si",
			quantita : 10,
			name: "mgd1.jpeg",
			url: "Preview/mgd1.jpeg",
		},

		{
			description : ["bianco", "tela", "sportivo", "45", "scarpe"],
			
			prezzo  : "90€",
			genere:  "uomo",
			disp : "si",
			quantita : 10,
			name: "sc2.jpeg",
			url: "Preview/sc2.jpeg",
		},	
	]
}

export const dictionary = {
	payload : [
	"bambino", "uomo","donna","maglie", "scarpe", "maglie", "camicia", "pantaloni", "jeans", 
	"giacca", "cappotto","vestito", "shorts","elegante",
	"sportivo", "casual", "sneakers", "stivali", "sandali","1",
	"2","3","4","5","6","7","8","9","0","numero","S", "XS", "M", "L", "XL", "XXL",
	"piccolo", "medio", "grande", "extra grande",
	"XXL", "XXXL", "taglia unica", "numero 36", "numero 37", "numero 38", "numero 39", "numero 40",
	"numero 41", "numero 42", "numero 43", "numero 44", "numero 45", "numero 46",
	"nero", "bianco", "grigio", "rosso", "blu", "verde", "giallo", "arancione", "rosa", 
	"viola", "marrone", "beige", "oro", "argento", "multicolore"]
}
/*
export const dictionaryReal = {
	payload : ["scarpe", "maglie", "pantaloni", "uomo", "donna", "bambino"]
}*/
export const genderDictionary = {
	payload : ["uomo", "donna", "bambino"]
}
export const productDictionary = {
	payload : ["scarpe", "maglie", "pantaloni"]
}