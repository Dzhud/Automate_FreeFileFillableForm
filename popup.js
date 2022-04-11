let copy1A = document.querySelector('#copy1A');
copy1A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 PUT ARCTURUS THERAPEUTIC$30 EXP 01/15/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '12/29/2020');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '1/4/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '24.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '2823');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '2.00 PUT ARCTURUS THERAPEUTIC$20 EXP 03/19/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '12/31/2020');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '1/4/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '158.67');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '672');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL SHOPIFY INC $1160 EXP 01/08/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '1/4/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '1/4/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '1509.32');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '527');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL ZSCALER INC $240 EXP 01/15/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '12/24/2020');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '1/4/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '32.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '3180');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 CALL ZSCALER INC $240 EXP 01/15/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '1/4/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '1/6/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '63.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '461');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 PUT ARCTURUS THERAPEUTIC$20 EXP 03/19/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '1/4/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '1/6/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '54.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1206');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '11.30');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL O REILLY AUTOMOTIVE$450 EXP 05/21/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '12/29/2020');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '1/6/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '3731.27');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '2899');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL SHOPIFY INC $1115 EXP 01/08/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '1/6/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '1/6/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '1356.32');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '375');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL SHOPIFY INC $1215 EXP 01/08/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '1/4/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '1/6/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '40.35');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '1375');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL SERVICE NOW INC $585 EXP 02/05/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '1/6/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '1/7/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '389.34');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3087');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '4.00 CALL UNITED AIRLINES HLD$140 EXP 01/21/22');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '1/8/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '97.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '2063');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '93.98');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 CALL UNITED AIRLINES HLD$140 EXP 01/21/22');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '12/21/2020'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '1/8/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '24.35');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '1250');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '7.00 CALL TRITERRAS INC $20 EXP 01/15/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '12/29/2020'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '1/8/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '30.36');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '3387');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '3.00 SOLID BIOSCIENCES INC');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '1/8/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '1/8/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '20.7');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3289');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');



		   let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();
		   
		   setTimeout(() => {
				 const mt = document.querySelector('#PopUpModalDialogiFrame');
				 const nt = mt.contentWindow.document;
  				 nt.querySelector("#lnkf8949st").click();
										},

				5000);
		    setTimeout(() => {
				 const mt = document.querySelector('#PopUpModalDialogiFrame');
				 const nt = mt.contentWindow.document;
				 nt.querySelector("#AddMoreFormBodyYes").click();
						},
					7000);					
									   
		 					         									
       }
    })
});


let copy2A = document.querySelector('#copy2A');
copy2A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '5.00 SOLID BIOSCIENCES INC');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '1/8/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '1/8/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '34.5');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '2230');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '92.00 SOLID BIOSCIENCES INC');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '1/8/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '1/8/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '634.79');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '3693');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL TRITERRAS INC $12.5 EXP 05/21/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '1/6/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '1/11/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '279.34');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '38');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL ALIBABA GROUP HOLDI$227.5 EXP 01/15/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '1/11/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '1/11/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '474.34');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '2373');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '30.00 PROSHARES VIX SHORT-TXXXREVERSE SPLIT EFF: 05/26/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '1/11/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '1/11/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '414.74');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '137');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '30.00 PROSHARES VIX SHORT-TXXXREVERSE SPLIT EFF: 05/26/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '1/11/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '413.99');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '3543');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '10.00 PROSHARES VIX SHORT-TXXXREVERSE SPLIT EFF: 05/26/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '1/12/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '1/12/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '140');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '3616');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 PUT ZOOM VIDEO COMMUNICA$280 EXP 01/15/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '1/12/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '1/13/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '4.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '2057');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 SERVICE NOW INC');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '1/12/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '1/13/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '513.85');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '300');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL SERVICE NOW INC $500 EXP 02/19/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '1/7/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '1/14/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '4030.26');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '2066');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 PUT ZOOM VIDEO COMMUNICA$120 EXP 06/18/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '12/30/2020'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '1/14/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '80.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '2838');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '16.00 SAREPTA THERAPEUTICS');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '1/14/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '1404.77');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '3986');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1000.00 TGI SOLAR POWER GRP');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '1/14/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '1/14/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '16.34');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '2863');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 CALL CITIGROUP INC $67.5 EXP 01/15/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '1/15/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '1/15/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '11.35');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3034');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);
											   

       }
    })
});

let copy3A = document.querySelector('#copy3A');
copy3A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL DRXN FINCL BULL 3X $72 EXP 01/15/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '1/15/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '1/15/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '7.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '177');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '10.00 PROSHARES VIX SHORT-TXXXREVERSE SPLIT EFF: 05/26/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '1/13/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '1/15/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '137.9');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '3744');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL MASTERCARD INC $375 EXP 01/29/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '1/14/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '1/19/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '28.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '1971');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');

		    //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL PINTEREST INC      $52         EXP 11/19/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '11/12/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '11/15/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '38.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '1242');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '2.00 CALL SERVICE NOW INC $700 EXP 05/21/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '1/20/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '1258.64');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '3866');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 PUT SAREPTA THERAPEUTICS$90 EXP 01/22/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '1/19/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '1/20/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '14.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1294');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '36.00 SPAC AND NEW ISSUE ETF');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '1/20/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '1033');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '879');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL SAREPTA THERAPEUTIC$100 EXP 03/19/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '1/8/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '1/21/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '1109.33');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '2863');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '2.00 CALL ALLSTATE CORP $120 EXP 02/19/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '1/19/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '1/21/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '62.67');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '3888');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL ALLSTATE CORP $120  EXP 02/19/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '1/19/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '1/21/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '31.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '2727');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL ALLSTATE CORP $120 EXP 02/19/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '1/19/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '1/21/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '31.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '691');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 PUT INTEL CORP $59 EXP 01/22/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '1/21/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '1/21/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '39.35');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '1328');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '5.00 INTEL CORP');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '1/21/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '1/21/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '296.99');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '1563');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '7.00 CALL TRITERRAS INC $20 EXP 05/21/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '1/22/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '310.35');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3991');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 10000);

       }
    })
});

let cop4A = document.querySelector('#copy4A');
copy4A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL LOCKHEED MARTIN COR$347.5 1/19/2021EXP 01/22/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '1/19/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '1/22/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '0');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '2914');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 PUT GAMESTOP CORP $21 EXP 02/05/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '1/21/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '1/22/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '23.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '2122');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 PUT GAMESTOP CORP $50 EXP 01/22/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '1/22/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '1/22/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '112.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '254');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '424.00 TRITERRAS INC 25 WTFWARRANTS EXP 11/10/25');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '1/25/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '847.98');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '111');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 CALL COLLABORATIVE INVT $33 EXP 06/18/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '1/22/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '1/26/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '379.34');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '3760');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '100.00 COHN ROBBINS HOLD 25 WTSWARRANTS EXP');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '1/25/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '1/26/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '238.49');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1360');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');

		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 PUT GAMESTOP CORP $14.5 EXP 01/29/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '1/26/2021'); 
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '1/27/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '0.35');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '26');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 AMC ENTERTAINMENT CLASS A');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '1/27/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '1/27/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '16');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '856');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '2.00 AMC ENTERTAINMENT CLASS A');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '1/27/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '1/27/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '23.94');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '3318');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '6.81');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '5.00 IBM CORP');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '1/27/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '619.42');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3351');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '6.00 KEMPHARM INC');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '1/26/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '1/27/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '40.8');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '692');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 SERVICE NOW INC');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '1/27/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '1/27/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '535.99');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '293');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '0.01 SERVICE NOW INC');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '1/27/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '1/27/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '5.2');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '315');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 PUT GAMESTOP CORP $37 EXP 11/19/21');
           idom.querySelector('#txtAcqDate14').setAttribute('value', '1/25/2021');
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '1/28/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '1899.31');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '626');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy5A  = document.querySelector('#copy5A');
copy5A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	
		   //Row 1
		   idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL THE MACERICH CO $30 EXP 02/19/21');
		   idom.querySelector('#txtAcqDate1').setAttribute('value', '1/28/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '1/28/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '140.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '3877');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		   
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 NAKED BRAND GROUP LIMXXXREVERSE SPLIT EFF: 12/22/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '1/27/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '1/28/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '2.83');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '344');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '3.00 CALL DIREXION SHARES E T$12.5  EXP 01/29/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '1/27/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '1/29/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '0');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '1843');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 PUT GAMESTOP CORP   $180   EXP 01/29/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '1/29/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '176.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '3579');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 PUT GAMESTOP CORP  $300  EXP 01/29/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '1/29/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '1/29/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '1849.31');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '776');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '8.00 TRITERRAS INC  25 WTFWARRANTS EXP  11/10/25');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '1/28/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '1/29/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '13.76');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1472');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');

		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 SNOWFLAKE INC CLASS  A');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '1/27/2021'); 
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '1/29/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '271.91');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '2790');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 PUT GAMESTOP CORP  $50 EXP 03/19/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '2/1/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '2/1/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '1449.32');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '1983');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 PUT AMC ENTERTAINMENT   $7 EXP 02/05/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '2/2/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '120.35');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '337');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 PUT AMC ENTERTAINMENT   $7  EXP 02/05/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '2/2/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '120.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '884');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 PUT AMC ENTERTAINMENT   $7  EXP 02/05/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '2/2/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '119.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '3448');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 PUT AMC ENTERTAINMENT   $7 EXP 02/05/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '2/2/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '119.35');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '884');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '6.00 PUT AMC ENTERTAINMENT  $7 EXP 02/05/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '2/2/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '716.01');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '499');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '2.00 CALL OATLY GROUP AB     $12.5       EXP 12/17/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '11/22/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '12/17/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '0');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '2192');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);


       }
    })
});


let copy6A  = document.querySelector('#copy6A');
copy6A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 PUT GAMESTOP CORP    $85    EXP 02/12/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '374.34');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '1376');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '2.00 PUT AMC ENTERTAINMENT   $8   EXP 02/05/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '244.66');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '693');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 PUT AMC ENTERTAINMENT  $8   EXP 02/05/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '122.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '3025');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 AMC ENTERTAINMENT  CLASS  A');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '2/1/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '10');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '1282');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '4.00 GOLDEN MINERALS CO');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '2/1/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '3.6');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '305');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 PUT ALPHABET INC.  $2085 EXP 02/05/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '2/3/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '2/3/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '1899.31');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1533');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '3.00 PAYPAL HOLDINGS INCORPOR');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '2/3/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '2/3/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '779.98');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '3135');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 PUT ALLSTATE CORP   $85   EXP 02/19/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '2/3/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '2/4/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '4.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '666');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '2.00 PUT QUALCOMM INC   $146   EXP 02/05/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '2/4/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '2/4/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '128.67');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '3933');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL QUALCOMM INC   $152.5  EXP 02/05/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '2/4/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '2/4/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '39.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3527');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL QUALCOMM INC       $152.5      EXP 02/05/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '2/4/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '2/4/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '39.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '3278');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '100.00 VG ACQUISITION EQ 25 XXXMANDATORY MERGER        ');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '2/4/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '2/4/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '434.99');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '627');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '50.00 VG ACQUISITION EQ 25 XXXMANDATORY MERGER        ');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '2/4/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '195.25');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '1546');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '2.00 PUT GAMESTOP CORP       $40         EXP 02/05/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '2/5/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '2/5/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '18.67');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3889');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy7A = document.querySelector('#copy7A');
copy7A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL GAMESTOP CORP    $100      EXP 02/05/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '2/5/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '2/5/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '37.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '1599');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 PUT GAMESTOP CORP  $9    EXP 02/19/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '2/8/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '6.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '3943');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 PUT GAMESTOP CORP    $58     EXP 02/12/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '2/8/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '2/8/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '699.33');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '185');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 GAMESTOP CORP       CLASS   A');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '2/5/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '2/8/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '71.5');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '327');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '7.00 LITHIUM AMERS CORP NEW F');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '2/8/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '156.87');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '3451');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '50.00 DIREXION DAILY JUNIOR   GOLD MINERS INDEX BEAR');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '2/1/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '2/9/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '502.09');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1545');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL CORSAIR GAMING INC $50     EXP 02/19/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '2/9/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '2/10/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '91.35');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '1822');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL PROSHARES TR II    $13.5       EXP 02/12/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '2/11/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '2/11/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '36.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '2201');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '2.00 CALL CALADRIUS BIOSCIENC$4    EXP 07/16/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '2/16/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '168.67');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '3176');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CME GROUP INC    CLASS  A');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '2/10/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '2/16/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '185.59');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '2525');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '20.00 CALADRIUS BIOSCIENCES IN');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '2/12/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '2/16/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '50.4');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '1721');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 CALL COLLABORATIVE INVT $31 EXP 09/17/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '1/21/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '2/18/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '568.34');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '2490');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL COLLABORATIVE INVT $31  EXP 09/17/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '1/21/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '2/18/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '568.34');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '2957');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '25000.00 ALUMIFUEL POWER CORP');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '2/18/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '2/18/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '125');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3764');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy8A = document.querySelector('#copy8A');
copy8A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 PUT SHOPIFY INC  $1380 EXP 02/19/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '2/19/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '2/19/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '4.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '2911');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '5.00 CALL ALLSTATE CORP  $125  EXP 02/19/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '1/21/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '2/19/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '0');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '2153');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL GAMESTOP CORP      $165        EXP 02/19/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '2/18/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '2/19/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '0.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '1869');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '150.00 TRITERRAS INC     25 WTFWARRANTS EXP  11/10/25');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '2/19/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '2/19/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '301.49');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '744');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '400.00 TRITERRAS INC     25 WTFWARRANTS EXP  11/10/25');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '2/19/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '2/19/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '799.98');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '2549');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '11.00 CARNIVAL CORP   F');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '2/22/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '295.48');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1307');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '597.00 TRITERRAS INC     25 WTFWARRANTS EXP  11/10/25');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '2/23/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '2/23/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '1128.32');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '3728');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL OATLY GROUP AB     $12.5       EXP 12/17/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '11/17/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '11/19/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '47.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '1804');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '3.00 TRITERRAS INC  25 WTFWARRANTS EXP  11/10/25');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '2/23/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '2/23/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '5.55');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '760');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL ADVANCED MICRO DEVI$85.5   EXP 02/26/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '2/24/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '79.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '2948');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL LOCKHEED MARTIN COR$347.5   EXP 02/26/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '2/24/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '249.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '757');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '200.00 NOHO INC');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '2/24/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '1.04');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '3898');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL CARLOTZ INC  $10  EXP 03/19/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '2/25/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '144.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '842');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '2.00 CALL RAYTHEON TECHNOLOGI$76  EXP 02/26/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '2/26/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '0.67');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3935');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});

let copy9A = document.querySelector('#copy9A');
copy9A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL RAYTHEON TECHNOLOGI$76  EXP 02/26/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '2/25/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '2/26/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '0.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '3434');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL ALPHABET INC.  $2060   EXP 02/26/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '2/25/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '2/26/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '114.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '2830');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 PUT GAMESTOP CORP   $85  EXP 02/26/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '2/26/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '2/26/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '299.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '1921');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '2.00 CALL ADVANCED MICRO DEVI$84.5 EXP 03/05/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '3/1/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '3/1/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '482.67');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '2905');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '0.14 ALPHABET INC.   CLASS  A');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '2/11/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '3/2/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '299.76');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '2603');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '2.00 CALL ADVANCED MICRO DEVI$87.5  EXP 03/05/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '3/2/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '3/3/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '34.67');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '2996');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '2.00 AMAZON.COM INC');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '3/8/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '3/8/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '6032.47');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '3371');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 LIGAND PHARMA');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '2/17/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '3/9/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '151');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '1050');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL GENERAL ELECTRIC CO$13         EXP 03/26/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '3/11/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '3/11/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '26.35');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '2095');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL GENERAL ELECTRIC CO$13         EXP 03/26/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '3/11/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '3/11/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '26.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3506');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL LOCKHEED MARTIN COR$337.5      EXP 04/23/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '3/11/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '3/11/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '1349.34');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '1372');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 PUT ALPHABET INC.       $2000       EXP 03/12/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '3/12/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '3/12/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '65.35');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '2565');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '2.00 PUT EXPRESS INC         $2.5        EXP 03/12/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '3/10/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '3/12/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '0');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '2733');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 PUT LAS VEGAS SANDS CORP$63         EXP 03/12/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '3/11/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '3/12/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '39.35');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3268');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});



let copy10A = document.querySelector('#copy10A');
copy10A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 PUT LAS VEGAS SANDS CORP$62         EXP 03/12/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '3/11/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '3/12/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '12.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '3435');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 PUT LAS VEGAS SANDS CORP$62         EXP 03/12/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '3/11/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '3/12/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '12.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '1775');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 PUT EXPRESS INC         $4          EXP 03/19/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '3/15/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '3/15/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '19.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '1673');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL LAS VEGAS SANDS COR$71         EXP 04/09/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '3/15/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '3/15/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '104.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '522');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 CALL CORSAIR GAMING INC $30         EXP 05/21/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '3/12/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '3/16/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '765.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '995');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 CALL CORSAIR GAMING INC $30         EXP 05/21/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '3/12/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '3/16/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '765.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '3076');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '3.00 CALL TRITERRAS INC      $12.5       EXP 08/20/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '3/16/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '208.01');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '3683');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '2.00 CALL SIGMA LABS INC     $7.5        EXP 03/19/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '3/16/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '3/16/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '68.67');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '3483');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL AEROJET ROCKETDYNE $50         EXP 03/19/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '3/15/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '3/16/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '4.35');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '1833');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '2.00 CALL PROSHARES TR II VIX$18         EXP 12/10/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '12/10/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '12/10/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '20.69');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3899');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');
		   

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL LOCKHEED MARTIN COR$345        EXP 01/21/22');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '1/15/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '3/17/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '3549.33');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '3864');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '2.00 PUT PLUG POWER INC      $26         EXP 03/19/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '3/17/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '32.67');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '1451');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL CORSAIR GAMING INC $35         EXP 03/19/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '3/17/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '3/17/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '43.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '1946');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 PUT LOCKHEED MARTIN CORP$347.5      EXP 03/19/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '3/17/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '3/17/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '99.35');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '72');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});

let copy11A  = document.querySelector('#copy11A');
copy11A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '70.00 SPARTAN ACQUISITI 25 XXXCORP ACT                EFF: 07/09/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '2/25/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '3/17/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '148.4');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '852');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL ALLSTATE CORP      $120        EXP 03/19/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '3/16/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '3/18/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '1.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '3910');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3125       EXP 03/26/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '3/18/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '3/18/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '3799.33');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '2661');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '2.00 HELLO PAL INTERNTNL I0 F');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '3/12/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '3/18/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '2.77');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '201');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '590.00 VENTOUX CCM ACQUI 25 WTSWARRANTS EXP  ');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '3/17/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '3/18/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '295.5');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '2213');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '2.00 PUT ALPHABET INC.       $1930       EXP 03/19/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '3/19/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '3/19/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '98.67');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '126');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL ROBINHOOD MKTS INC $21         EXP 12/23/21');
           idom.querySelector('#txtAcqDate7').setAttribute('value', '12/22/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '12/23/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '0');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '89');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL SERVICE NOW INC    $510        EXP 04/16/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '3/17/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '3/19/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '599.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '2486');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3085       EXP 03/26/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '3/19/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '3/19/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '3799.33');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '2244');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL LORDSTOWN MTRS CORP$19         EXP 04/09/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '3/18/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '3/19/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '40.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '2937');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL ALLSTATE CORP      $120        EXP 04/16/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '3/19/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '3/22/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '27.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '2124');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 CALL ALPHABET INC.      $2020       EXP 03/26/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '3/22/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '3299.33');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '1934');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL ALPHABET INC.      $2040       EXP 03/26/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '3/22/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '3/22/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '1899.34');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '1031');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '0.03 AMAZON.COM INC');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '3/19/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '3/22/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '101.55');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3604');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});



let copy12A = document.querySelector('#copy12A');
copy12A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL ALPHABET INC.      $2040       EXP 04/16/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '3/23/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '3/23/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '5449.32');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '3011');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL AIRBNB INC         $202.5      EXP 03/26/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '3/23/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '3/23/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '125.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '489');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '2.00 PUT CARNIVAL CORP       $25         EXP 03/26/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '3/22/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '3/23/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '20.67');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '3766');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL CARNIVAL CORP      $27         EXP 03/26/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '3/22/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '3/23/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '78.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '1376');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 CALL CARNIVAL CORP      $27         EXP 03/26/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '3/22/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '3/23/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '78.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '803');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 PUT ALPHABET INC.       $2060       EXP 04/01/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '3/24/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '3349.33');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '499');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL UNITY SOFTWARE INC $135        EXP 04/16/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '3/22/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '3/24/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '14.35');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '980');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '100.00 TRITERRAS INC     25 WTFWARRANTS EXP  11/10/25');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '3/24/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '3/24/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '169');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '239');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '100.00 TRITERRAS INC     25 WTFWARRANTS EXP  11/10/25');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '3/24/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '3/24/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '168.73');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '1318');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '20.00 TRITERRAS INC     25 WTFWARRANTS EXP  11/10/25');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '3/24/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '3/24/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '33.75');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3641');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 PUT GAMESTOP CORP       $106        EXP 03/26/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '3/25/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '3/25/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '158.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '1227');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 CALL AMC ENTERTAINMENT  $12         EXP 03/26/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '3/26/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '3/26/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '19.35');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '31');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '2.00 PUT AMC ENTERTAINMENT   $10.5       EXP 03/26/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '3/26/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '3/26/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '16.67');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '2375');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 PUT ALPHABET INC.       $2000       EXP 03/26/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '3/26/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '3/26/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '134.35');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3416');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy13A = document.querySelector('#copy13A');
copy13A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL ALPHABET INC.      $2032.5     EXP 03/26/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '3/26/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '3/26/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '219.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '2028');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL SERVICE NOW INC    $477.5      EXP 04/30/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '3/24/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '3/26/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '2999.33');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '2052');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '2.00 PUT CORSAIR GAMING INC  $25         EXP 04/16/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '3/19/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '3/29/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '34.67');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '394');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '3.00 CALL CORSAIR GAMING INC $50         EXP 04/16/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '3/29/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '10.01');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '2567');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 PUT FLY LEASING LTD     $15         EXP 04/16/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '3/29/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '3/29/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '4.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '3913');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 CALL ALPHABET INC.      $2065       EXP 04/09/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '3/25/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '3/29/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '2099.34');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '3477');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL ALPHABET INC.      $2017.5     EXP 04/09/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '3/29/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '3/29/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '5249.32');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '2610');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL SERVICE NOW INC    $495        EXP 04/01/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '3/30/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '3/30/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '259.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '657');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3045       EXP 04/16/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '3/30/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '3/30/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '7649.31');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '2111');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL ALPHABET INC.      $2075       EXP 05/21/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '3/31/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '3/31/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '8210.31');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '1311');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '6.00 HELLO PAL INTERNTNL I0 F');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '3/30/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '3/31/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '6.06');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '2415');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '2.00 PUT AMC ENTERTAINMENT   $9          EXP 04/01/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '4/1/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '4/1/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '8.67');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '2791');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 PUT ALPHABET INC.       $2080       EXP 04/01/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '4/1/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '4/1/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '99.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '3458');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 CALL AMC ENTERTAINMENT  $11         EXP 04/01/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '3/31/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '4/1/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '2.35');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '1823');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy14A = document.querySelector('#copy14A');
copy14A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 PUT ALPHABET INC.       $2110       EXP 04/23/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '4/1/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '4949.32');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '2380');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 SIGMA LABS INC');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '3/24/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '4/1/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '3.71');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '1263');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 PUT ALPHABET INC.       $2120       EXP 04/16/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '4/5/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '4/5/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '1849.34');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '889');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 PUT ALPHABET INC.       $2120       EXP 04/16/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '4/1/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '4/5/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '2270.34');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '2289');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 PUT ALPHABET INC.       $2190       EXP 04/16/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '4/5/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '4/5/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '2899.34');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '340');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 PUT GAMESTOP CORP       $65         EXP 04/16/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '3/31/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '4/5/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '75.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1900');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '145.00 SPARTAN ACQUISITI 25 XXXCORP ACT                EFF: 07/09/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '4/5/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '263.9');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '1303');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL AIRBNB INC         $200        EXP 04/09/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '4/5/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '4/6/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '150.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '2495');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL AIRBNB INC         $185        EXP 01/21/22');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '4/7/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '4/7/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '3364.33');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '154');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '2.00 PUT PAYCHEX INC         $90         EXP 04/16/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '4/6/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '4/7/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '20.67');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3238');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL AIRBNB INC         $192.5      EXP 04/09/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '4/7/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '4/7/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '65.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '305');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 PUT SERVICE NOW INC     $490        EXP 04/09/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '4/6/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '4/7/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '49.35');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '2910');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL LOCKHEED MARTIN COR$377.5      EXP 04/09/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '4/6/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '4/7/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '284.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '602');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '5.00 CARNIVAL CORP   F');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '4/6/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '4/7/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '148.61');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '2290');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy15A = document.querySelector('#copy15A');
copy15A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '2.00 CALL CORSAIR GAMING INC $22.5       EXP 12/17/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '2738.66');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '517');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL AUTOZONE INC       $1450       EXP 04/09/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '39.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '2918');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL CARNIVAL CORP      $28.5       EXP 04/16/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '66.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '3096');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '3.00 CALL CARNIVAL CORP      $28.5       EXP 04/16/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '205.01');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '2502');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '3.00 CALL CARNIVAL CORP      $28.5       EXP 04/16/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '205.01');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '3041');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '3.00 CALL CARNIVAL CORP      $28.5       EXP 04/16/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '205.01');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1831');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL SERVICE NOW INC    $505        EXP 05/14/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '4/6/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '4/8/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '3779.33');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '2181');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '2.00 CALL WD-40 CO           $260        EXP 05/21/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '4/9/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '4/9/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '4298.65');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '2698');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL WD-40 CO           $260        EXP 08/20/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '4/9/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '4/9/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '3399.33');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '3418');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '2.00 PUT ALPHABET INC.       $2175       EXP 04/09/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '4/8/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '4/9/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '20.67');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3084');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL UNITY SOFTWARE INC $105        EXP 04/16/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '4/8/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '4/12/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '13.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '1353');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '3.00 PUT ALLSTATE CORP       $115        EXP 04/16/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '4/12/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '4/13/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '16.01');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '57');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL WD-40 CO           $280        EXP 04/16/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '4/12/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '4/13/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '29.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '3707');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 CALL WD-40 CO           $210        EXP 11/19/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '4/12/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '4/13/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '5449.32');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '1893');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});

let copy16A = document.querySelector('#copy16A');
copy16A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL CARNIVAL CORP      $28         EXP 04/16/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '4/13/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '4/13/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '37.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '3845');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3500       EXP 04/30/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '4/14/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '4/15/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '4429.33');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '155');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '3.00 ALLSTATE CORP');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '4/15/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '361.8');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '55');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '0.76 ALLSTATE CORP');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '2/11/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '4/15/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '91.15');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '2630');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 PUT PELOTON INTERACTIVE $90         EXP 04/30/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '4/19/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '4/19/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '64.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '2300');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3800       EXP 05/14/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '4/16/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '4/19/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '1349.34');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '2776');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL ALPHABET INC.      $2305       EXP 04/23/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '4/16/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '4/19/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '2599.34');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '3615');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '10.00 SPARTAN ACQUISITI 25 XXXCORP ACT                EFF: 07/09/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '1/27/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '4/20/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '14.8');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '1198');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '100.00 SPARTAN ACQUISITI 25 XXXCORP ACT                EFF: 07/09/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '4/20/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '147');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '3111');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '697.00 TRITERRAS INC     25 WTFWARRANTS EXP  11/10/25');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '4/21/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '1003.67');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '292');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '4.00 AMC ENTERTAINMENT       CLASS                  A');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '4/16/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '4/21/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '38.9');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '1161');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '3.00 WD-40 CO');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '4/14/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '4/21/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '780');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '2259');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3575       EXP 05/14/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '4/20/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '4/23/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '2588.34');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '3746');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '15.00 CHURCHILL CAPITAL IV XXXMANDATORY MERGER        ');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '4/26/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '343.95');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '1801');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy17A = document.querySelector('#copy17A');
copy17A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 PUT ALPHABET INC.       $2330       EXP 04/30/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '4/28/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '4/28/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '607.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '2533');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '2.00 CALL CORSAIR GAMING INC $35         EXP 12/17/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '4/16/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '4/29/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '1018.66');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '1994');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL NETFLIX INC        $500        EXP 05/28/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '4/23/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '4/29/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '1679.34');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '231');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 PUT ALPHABET INC.       $2200       EXP 05/21/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '4/26/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '4/30/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '749.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '1671');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 CALL SHOPIFY INC        $1210       EXP 04/30/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '4/30/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '4/30/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '319.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '2741');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 CALL TESLA INC          $715        EXP 05/07/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '5/3/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '5/3/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '1019.34');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '63');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL SERVICE NOW INC    $537.5      EXP 05/07/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '4/29/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '5/3/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '38.35');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '822');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '2.00 PUT CORSAIR GAMING INC  $25         EXP 05/21/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '5/4/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '2.67');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '889');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 DIREXION DAILY MSCI RXXXREVERSE SPLIT           EFF: 10/25/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '4/20/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '5/5/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '6.48');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '1979');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL ALLSTATE CORP      $125        EXP 06/18/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '5/6/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '639.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '2497');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 COINBASE GLOBAL INC');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '4/30/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '5/6/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '258.48');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '2941');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3330       EXP 05/07/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '5/7/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '5/7/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '699.35');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '3786');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3385       EXP 05/07/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '5/7/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '22.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '3904');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '0.02 ALPHABET INC.   CLASS   A');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '4/30/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '5/24/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '41.94');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '516');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy18A = document.querySelector('#copy18A');
copy18A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 PUT AMC ENTERTAINMENT   $20         EXP 05/28/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '5/28/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '5/28/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '6.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '1025');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 PUT AMC ENTERTAINMENT   $22         EXP 05/28/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '5/27/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '5/28/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '8.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '2927');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL DIGITAL TURBINE INC$76         EXP 06/04/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '6/2/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '6/2/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '9.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '2473');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '6.00 PAYPAL HOLDINGS INCORPOR');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '4/30/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '6/2/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '1578.59');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '515');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 PUT PROSHARES TR II VIX $27         EXP 06/04/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '6/3/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '6/4/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '4.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '3549');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 PUT BIOGEN INC          $270        EXP 06/11/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '6/7/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '6/7/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '35.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '2658');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL TESLA INC          $617.5      EXP 06/11/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '6/7/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '6/7/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '369.35');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '319');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 SHOPIFY INC   FCLASS    A');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '6/7/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '6/7/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '1218.06');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '1490');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL PALANTIR TECHNOLOGI$24.5       EXP 06/11/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '6/8/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '6/8/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '61.35');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '498');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 PUT BIOGEN INC          $350        EXP 06/11/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '6/8/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '6/8/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '209.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3614');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CLEAN ENERGY FUELS');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '6/9/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '6/9/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '14');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '3653');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '2.00 CONTEXTLOGIC INC CLASS A');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '6/9/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '28.8');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '135');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL AUTOZONE INC  $1480   EXP 07/23/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '6/9/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '6/10/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '899.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '2275');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '3.00 CALL VERTEX PHARMACEUTIC$200        EXP 06/11/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '6/11/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '6/11/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '25.01');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '2235');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy19A = document.querySelector('#copy19A');
copy19A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL CORSAIR GAMING INC $35         EXP 12/17/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '4/16/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '1099.34');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '2131');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL THOR INDUSTRIES INC$160        EXP 09/17/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '6/8/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '82.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '217');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 PUT SPDR S&P 500        $420        EXP 06/14/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '1.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '2675');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL SPDR S&P 500       $425        EXP 06/14/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '3.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '3369');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '2.00 CALL SPDR S&P 500       $424        EXP 06/14/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '68.67');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '409');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 CALL VERTEX PHARMACEUTIC$202.5      EXP 06/18/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '6/11/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '59.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '2393');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '17.00 CORSAIR GAMING INC');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '647.53');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '952');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '2.00 CORSAIR GAMING INC');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '2/23/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '82.02');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '1718');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '2.00 CORSAIR GAMING INC');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '2/18/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '82.02');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '2393');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CORSAIR GAMING INC');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '2/9/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '6/14/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '42.48');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '1641');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL SAGE THERAPEUTICS  $50  EXP 01/21/22');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '6/15/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '6/15/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '1779.34');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '3547');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 CALL ALPHABET INC.      $2395       EXP 06/18/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '6/16/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '6/16/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '1729.34');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '3293');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '3.00 CORSAIR GAMING INC');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '4/30/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '6/16/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '104.1');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '2453');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '45.00 CORSAIR GAMING INC');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '3/10/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '6/16/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '1561.49');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '2650');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy20A = document.querySelector('#copy20A');
copy20A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '0.78 PAYPAL HOLDINGS INCORPOR');
           idom.querySelector('#txtAcqDate1').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '6/16/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '208.99');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '1640');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 PUT SHOPIFY INC         $1360       EXP 06/18/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '6/17/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '6/18/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '64.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '1244');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 PUT SHOPIFY INC         $1350       EXP 06/25/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '6/17/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '6/18/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '799.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '853');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL ALPHABET INC.      $2475       EXP 07/02/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '6/18/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '6/18/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '1729.34');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '3596');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '0.32 APPLE INC');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '6/18/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '41.93');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '1123');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '15.00 CORSAIR GAMING INC');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '5/12/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '6/18/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '478.06');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '625');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 DIREXION DAILY FINANCIALBULL 3X ETF');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '6/17/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '6/18/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '99.08');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '2901');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3540       EXP 07/02/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '6/21/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '6/21/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '2812.34');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '1467');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL SPDR S&P 500       $428        EXP 06/23/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '6/22/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '6/22/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '4.35');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '942');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL COINBASE GLOBAL INC$200        EXP 07/30/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '6/22/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '6/22/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '2356.34');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3894');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 PUT SHOPIFY INC         $1510       EXP 06/25/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '6/23/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '6/23/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '2099.34');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '113');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 PUT SHOPIFY INC         $1500       EXP 06/25/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '6/24/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '6/24/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '1009.34');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '7');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3500       EXP 06/25/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '6/25/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '6/25/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '99.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '3721');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 CALL DRXN FINCL BULL 3X $109        EXP 06/25/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '6/25/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '6/25/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '164.35');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '376');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy21A= document.querySelector('#copy21A');
copy21A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 PUT CARMAX INC          $127        EXP 06/25/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '6/25/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '64.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '1297');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3435       EXP 06/25/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '6/25/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '6/25/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '549.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '3096');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL EXPEDIA GROUP INC. $182.5      EXP 07/02/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '6/28/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '6/29/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '2.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '2393');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL AIRBNB INC         $200        EXP 01/21/22');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '6/28/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '6/30/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '779.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '1611');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 CALL AIRBNB INC         $200        EXP 01/21/22');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '6/28/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '6/30/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '774.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '686');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 CALL PALANTIR TECHNOLOGI$15         EXP 01/20/23');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '5/4/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '7/1/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '1259.34');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '2164');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL SHOPIFY INC        $1507.5     EXP 07/02/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '7/1/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '7/2/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '101.35');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '1430');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL ARROWHEAD PHARMA IN$90         EXP 09/17/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '7/2/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '7/6/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '253.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '632');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '2.00 CALL ARROWHEAD PHARMA IN$90         EXP 09/17/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '7/2/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '7/6/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '506.67');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '1981');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '110.00 ARK SPACE EXPLORATION   INNVAT ETF');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '7/6/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '2289.09');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '1465');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL SPDR S&P 500       $436        EXP 07/07/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '7/6/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '7/7/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '5.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '3125');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 CALL EXPEDIA GROUP INC. $180        EXP 08/20/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '7/8/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '7/8/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '348.35');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '1542');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL THOR INDUSTRIES INC$100        EXP 07/16/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '7/8/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '7/9/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '1084.34');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '1410');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 CALL THOR INDUSTRIES INC$100        EXP 07/16/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '7/8/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '7/9/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '1084.34');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '683');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy22A  = document.querySelector('#copy22A');
copy22A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL PROCURE ETF TRUST I$31         EXP 07/16/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '7/8/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '7/9/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '24.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '1455');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL BOOKING HOLDINGS IN$2200       EXP 07/09/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '7/9/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '7/9/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '274.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '2893');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3800       EXP 07/09/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '7/9/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '7/9/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '282.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '233');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL BOOKING HOLDINGS IN$2185       EXP 07/16/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '7/12/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '7/12/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '3279.33');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '3651');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 CALL THOR INDUSTRIES INC$130        EXP 09/17/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '7/7/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '7/13/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '154.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '3025');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 CALL THOR INDUSTRIES INC$130        EXP 09/17/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '7/7/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '7/13/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '139.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1362');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL PROCURE ETF TRUST I$29         EXP 12/17/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '7/7/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '7/13/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '249.35');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '1296');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL GOLDMAN SACHS GROUP$365        EXP 01/21/22');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '7/14/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '3424.33');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '689');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL BLACKROCK INC      $935        EXP 07/16/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '7/14/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '7/14/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '4.35');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '557');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '12.00 DIREXION DAILY MSCI RXXXREVERSE SPLIT           EFF: 10/25/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '7/12/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '7/14/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '58');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3287');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL SPDR S&P 500       $435        EXP 07/16/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '7/15/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '7/15/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '139.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '2664');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '10.00 DIDI GLOBAL INC        FUNSPONSORED ADR         1 ADR REP  0.25  ORD SHS');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '7/15/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '124.65');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '718');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3680       EXP 07/16/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '5/7/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '7/16/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '101.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '1611');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 CALL DRXN FINCL BULL 3X $103        EXP 07/30/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '5/12/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '7/20/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '374.35');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '1035');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy23A = document.querySelector('#copy23A');
copy23A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL GOLDMAN SACHS GROUP$365        EXP 01/21/22');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '5/14/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '7/22/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '2949.33');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '1826');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL DIREXION SHARES E T$12         EXP 07/23/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '5/19/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '7/22/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '10.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '384');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '150.00 BEACHBODY CO INC');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '6/1/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '7/22/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '1533.74');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '1020');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL ALIBABA GROUP HLDG $205        EXP 07/23/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '6/2/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '7/23/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '201.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '2905');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 CALL CHURCHILL CAPITAL I$40         EXP 07/23/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '6/3/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '7/23/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '0');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '3487');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 CALL BOSTON BEER CO INC $760        EXP 08/20/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '6/8/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '7/26/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '1849.34');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '2242');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '3.00 LUCID GROUP INC');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '7/26/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '82.92');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '1788');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '2.00 LUCID GROUP INC');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '7/26/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '55.28');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '2473');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 LUCID GROUP INC');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '6/15/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '7/26/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '27.64');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '117');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL ALIBABA GROUP HOLDI$185        EXP 08/20/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '6/16/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '7/27/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '930.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '411');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL ALIBABA GROUP HOLDI$250        EXP 09/17/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '7/27/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '71.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '2856');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 CALL ALIBABA GROUP HLDG $197.5      EXP 07/30/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '6/23/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '7/27/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '129.35');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '1815');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 PUT ALIBABA GROUP HLDG L$160        EXP 07/30/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '7/6/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '7/27/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '97.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '767');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 TAL ED GROUP           FSPONSORED ADR            0.333333333333  ORD SHS');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '7/8/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '7/27/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '5.15');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '877');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});



let copy24A = document.querySelector('#copy24A');
copy24A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL GOLDMAN SACHS GROUP$367.5      EXP 08/06/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '7/12/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '7/28/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '1209.34');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '3507');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL GOLDMAN SACHS GROUP$367.5      EXP 08/06/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '7/15/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '7/28/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '1209.34');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '1487');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL SPOTIFY TECHNOLOGY $210        EXP 08/06/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '7/16/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '7/28/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '829.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '3774');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '10.00 NEW ORIENTAL EDUCATION FSPONSORED ADR           1 ADR REPS    1  ORD SHS');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '7/19/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '7/28/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '24.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '1480');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '90.00 NEW ORIENTAL EDUCATION FSPONSORED ADR           1 ADR REPS    1  ORD SHS');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '7/20/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '7/28/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '219.15');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '3107');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '5.00 PUT SPDR S&P 500        $437        EXP 07/30/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '7/21/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '7/29/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '146.7');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1057');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL BOSTON BEER CO INC $740        EXP 09/17/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '7/23/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '8/3/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '1899.34');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '2958');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL CORSAIR GAMING INC $27.5       EXP 09/17/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '7/27/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '8/3/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '174.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '181');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '0.01 AMAZON.COM INC');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '7/28/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '8/3/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '25.44');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '1751');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CORSAIR GAMING INC');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '8/2/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '8/3/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '26.94');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '192');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '5.00 REALTY INCOME CORP DISCOREIT');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '6/17/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '8/3/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '350.06');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '1288');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 CALL DRXN REG BNK BLL 3X$185        EXP 08/20/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '8/4/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '8/4/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '1399.34');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '1833');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 ROBINHOOD MKTS INC  CLASS  A');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '7/29/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '8/4/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '77.03');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '3128');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '2.00 PUT ETSY INC            $180        EXP 08/20/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '8/5/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '8/5/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '1098.68');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '1157');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy25A = document.querySelector('#copy25A');
copy25A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL AIRBNB INC         $145        EXP 08/06/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '8/6/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '8/6/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '364.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '2280');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL AIRBNB INC   $145    EXP 08/06/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '8/6/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '8/6/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '364.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '3889');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL AIRBNB INC         $150        EXP 08/06/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '8/6/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '8/6/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '4.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '1526');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '4.00 CALL PALANTIR TECHNOLOGI$23         EXP 08/13/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '8/6/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '8/9/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '413.34');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '2920');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 CALL AIRBNB INC         $150        EXP 08/27/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '7/21/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '8/9/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '609.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '2129');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 CALL COINBASE GLOBAL INC$320        EXP 08/13/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '8/10/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '8/10/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '129.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1487');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '16.00 FULL TRUCK ALLIANCE CO FUNSPONSORED ADR         1 ADR REPS       ORD SHS');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '8/10/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '222.51');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '1680');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL AIRBNB INC         $200        EXP 10/15/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '8/9/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '8/11/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '82.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '539');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '28.31');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL COINBASE GLOBAL INC$320        EXP 08/13/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '8/10/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '8/11/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '159.35');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '1565');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 PUT COINBASE GLOBAL INC $257.5      EXP 08/13/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '8/11/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '8/12/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '134.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3786');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL COINBASE GLOBAL INC$267.5      EXP 08/13/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '8/12/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '8/12/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '189.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '3977');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 PALANTIR TECHNOLOGIES INCLASS  A');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '8/11/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '8/12/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '23.78');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '3322');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 PUT COINBASE GLOBAL INC $195        EXP 08/13/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '8/10/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '8/13/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '0');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '2981');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '3.00 CALL AIRBNB INC         $200        EXP 10/15/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '8/16/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '169.01');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3307');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy26A = document.querySelector('#copy26A');
copy26A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '2.00 CALL SPDR S&P 500       $445        EXP 08/16/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '8/16/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '8/16/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '12.69');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '2440');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL HOME DEPOT INC     $325        EXP 08/20/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '8/17/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '8/17/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '100.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '2621');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '5.00 CALL HOME DEPOT INC     $365        EXP 09/10/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '8/17/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '8/18/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '46.69');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '1536');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '9.00 BEACHBODY CO INC  27 WTFWARRANTS EXP  12/31/27');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '8/18/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '17.74');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '1215');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '11.00 CALL SPDR S&P 500       $451        EXP 08/20/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '8/19/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '14.73');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '914');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 PUT PROSHARES TR II VIX $24         EXP 08/20/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '8/19/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '8/19/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '59.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '2554');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '5.00 LUCID GROUP INC');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '5/13/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '8/19/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '109.45');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '1526');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 LUCID GROUP INC');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '5/3/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '8/19/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '21.89');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '2499');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '2.00 LUCID GROUP INC');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '4/30/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '8/19/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '43.78');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '3663');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 LUCID GROUP INC');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '8/19/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '21.89');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '1182');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '2.00 LUCID GROUP INC');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '4/16/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '8/19/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '43.78');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '18');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '3.00 LUCID GROUP INC');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '8/19/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '65.67');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '174');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '25.00 CALL ARK ETF TR         $26         EXP 08/20/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '6/24/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '8/20/20210');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '0');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '1304');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 PUT BOSTON BEER CO INC  $580        EXP 08/20/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '8/20/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '8/20/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '59.35');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '1604');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy27A = document.querySelector('#copy27A');
copy27A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 PUT AIRBNB INC          $155        EXP 09/03/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '8/24/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '8/26/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '339.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '499');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 CALL MOLSON COORS BEVERA$62.5       EXP 01/20/23');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '8/5/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '9/8/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '189.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '1230');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 CALL SPDR S&P 500       $452        EXP 09/20/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '9/16/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '9/20/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '0');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '590');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 PUT DELTA AIR LINES INC $41   EXP 09/24/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '9/23/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '9/23/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '9.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '3521');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 DIREXION DAILY FINANCIALBULL 3X ETF');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '9/20/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '9/23/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '120.14');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '2685');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 CALL SPDR S&P 500       $443        EXP 09/27/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '9/27/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '9/27/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '110.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '2179');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL PROSHARES TR II VIX$20         EXP 10/01/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '9/28/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '9/28/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '121.35');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '1872');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '50.00 BEACHBODY CO INC');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '9/29/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '303.05');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '934');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 PUT PROSHARES TR II VIX $21.5       EXP 10/01/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '9/30/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '10/1/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '4.35');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '1948');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL II-VI INC          $65         EXP 01/21/22');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '8/10/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '10/4/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '246.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '905');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL SPDR S&P500 GRO ETF$60         EXP 03/18/22');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '9/17/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '10/5/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '599.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '1253');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 CALL DELTA AIR LINES INC$38         EXP 11/05/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '10/6/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '10/7/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '679.35');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '3842');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 BLOCK INC CLASS  A');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '10/4/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '10/7/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '249.8');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '1408');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '5.00 II-VI INC');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '10/7/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '290.74');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3957');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy28A = document.querySelector('#copy28A');
copy28A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '1.00 CALL DRXN FINCL BULL 3X $125 EXP 10/15/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '10/13/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '10/14/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '399.35');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '577');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '3.00 BLOCK INC  CLASS  A');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '10/14/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '741');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '1716');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 PUT APPLE INC  $145 EXP 10/15/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '10/15/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '10/15/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '69.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '2021');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL PROSHARES TR II VIX$19         EXP 10/15/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '10/14/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '10/15/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '4.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '3294');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 PUT DRXN FINCL BULL 3X  $134        EXP 10/15/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '10/15/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '10/15/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '129.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '3143');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '0.12 TESLA INC');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '9/17/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '10/15/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '95.97');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1525');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 PUT SPDR S&P 500        $446        EXP 10/18/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '10/18/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '10/18/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '44.35');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '3841');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL SPDR S&P 500  $445  EXP 10/20/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '10/18/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '10/18/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '229.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '453');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL PROCTER & GAMBLE   $135        EXP 10/29/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '10/19/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '10/19/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '484.35');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '1510');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '9.00 PROSHARES VIX SHORT-TERMFUTURES ETF');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '10/19/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '162.9');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '2339');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '3.00 CALL US GLOBAL JETS     $23.5       EXP 10/22/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '9/1/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '10/20/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '10.01');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '331');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '2.00 CALL US GLOBAL JETS     $23.5       EXP 10/22/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '9/6/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '10/20/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '8.69');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '3157');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL PROCTER & GAMBLE   $142        EXP 10/22/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '9/13/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '10/20/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '28.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '586');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 CALL PINTEREST INC      $61         EXP 10/22/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '9/15/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '10/21/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '154.35');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '2280');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy29A  = document.querySelector('#copy29A');
copy29A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '2.00 PUT PINTEREST INC       $58         EXP 10/22/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '9/17/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '10/21/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '16.69');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '3557');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 PUT PINTEREST INC       $55         EXP 10/29/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '9/20/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '10/21/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '28.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '1785');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 BOSTON BEER CO INC CLASS  A');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '9/21/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '10/21/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '498');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '1704');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL US GLOBAL JETS     $18         EXP 11/12/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '9/23/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '10/22/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '449.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '2685');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 CALL SNAP INC  $57  EXP 10/29/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '9/27/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '10/22/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '183.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '2554');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 PUT PINTEREST INC       $48         EXP 10/29/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '9/30/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '10/26/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '40.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '3548');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL PINTEREST INC $47.5  EXP 01/21/22');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '10/4/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '10/26/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '559.35');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '224');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 PUT LUCID GROUP INC     $24         EXP 10/29/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '10/5/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '10/28/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '1.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '3557');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL PINTEREST INC      $46         EXP 11/12/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '10/8/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '10/28/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '243.35');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '1471');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL LUCID GROUP INC    $42         EXP 10/29/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '10/12/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '10/29/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '199.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '1723');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL PINTEREST INC      $46         EXP 11/05/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '10/13/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '11/1/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '180.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '3910');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 PUT PINTEREST INC       $35         EXP 11/05/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '10/18/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '11/5/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '0.35');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '1539');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 PROSHARES BITCOIN       STRATEGY ETF');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '10/25/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '11/9/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '43.62');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '3737');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 PROSHARES BITCOIN       STRATEGY ETF');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '10/26/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '11/9/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '43.62');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3470');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949st").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let  copy30A = document.querySelector('#copy30A');
copy30A.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '2.00 LUCID GROUP INC');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '10/28/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '11/10/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '85.7');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '2662');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 LUCID GROUP INC');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '10/29/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '11/10/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '42.85');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '981');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '2.00 PUT BEYOND MEAT INC     $80         EXP 11/12/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '11/12/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '11/12/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '128.69');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '1303');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 PUT GAMESTOP CORP       $85         EXP 02/12/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '2/2/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '2999.28');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '3688');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		  
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '2.00 CALL BEACHBODY CO INC   $5          EXP 11/19/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '11/16/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '8.69');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '1524');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 CALL OATLY GROUP AB     $10         EXP 11/19/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '11/15/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '11/16/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '64.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '1561');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '1.00 CALL PINTEREST INC      $50         EXP 11/19/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '11/17/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '11/18/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '6.35');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '2486');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');
		   
		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL DELTA AIR LINES INC$38         EXP 11/26/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '11/26/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '11/26/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '0');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '3451');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '0.27 APPLE INC');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '12/8/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '47.58');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '1689');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '3.00 CALL PROSHARES TR II VIX$18         EXP 12/10/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '12/10/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '12/10/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '31.01');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '3308');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '1.00 CALL SILVERGATE CAP CORP$190        EXP 12/17/21');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '12/13/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '12/13/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '14.35');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '429');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '1.00 CALL AIRBNB INC         $200        EXP 01/21/22');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '6/28/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '6/30/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '774.35');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '567');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		
		   

       }
    })
});






//Long-term Transactions


let copy1B= document.querySelector('#copy1B');
copy1B.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({active: true, currentWindow:true});
	chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: () => {
            const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;

		   //Row 1
		   idom.querySelector('#txtDescrip1').setAttribute('value', '3.00 CALL UNITED AIRLINES HLD$140 EXP 01/21/22');
		   idom.querySelector('#txtAcqDate1').setAttribute('value', '12/17/2020'); 
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '1/8/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '73.01');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '824');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');


		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 PUT N I O INC $59.5 EXP 01/15/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '1/12/2021'); 
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '1/13/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '77.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '2366');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');


		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '1.00 PUT ARCTURUS THERAPEUTIC$20 EXP 03/19/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '1/5/2021'); 
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '1/14/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '9.35');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '1084');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');

		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL ADVANCED MICRO DEVI$86.5 EXP 03/19/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '3/2/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '3/3/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '115.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '2973');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');

		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 BELDEN INC');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '2/10/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '3/3/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '45.1');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '2145');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');

		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '30.00 HELLO PAL INTERNTNL I0 F');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '3/3/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '38.27');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '2773');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '30.00 HELLO PAL INTERNTNL I0 F');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '3/1/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '3/3/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '40.05');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '1938');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL SHOPIFY INC $1255  EXP 03/05/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '3/4/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '3/4/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '299.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '861');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '2.00 ALLSTATE CORP');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '2/4/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '3/4/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '219.06');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '3652');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '3.00 ALLSTATE CORP');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '2/4/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '3/4/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '328.59');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '1266');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '4.00 ALLSTATE CORP');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '3/4/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '434.56');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '1446');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '20.00 ALLSTATE CORP');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '2/3/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '3/4/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '2239.99');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '870');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL NORWEGIAN CRUISE LI$29.5 EXP 03/05/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '3/5/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '3/5/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '5.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '787');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '1.00 CALL NORWEGIAN CRUISE LI$29.5  EXP 03/05/21');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '3/5/2021'); 
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '3/5/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '5.35');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3289');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949lt").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

 }
    })
});


let copy2B = document.querySelector('#copy2B');
copy2B.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '6.00 CALL NORWEGIAN CRUISE LI$29.5       EXP 03/05/21');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '3/5/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '3/5/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '32.03');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '1487');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '1.00 PUT NORWEGIAN CRUISE LIN$27         EXP 03/05/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '3/5/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '3/5/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '4.35');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '3386');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '10.00 CALL NORWEGIAN CRUISE LI$30.5       EXP 03/05/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '3/5/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '3/5/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '13.37');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '3334');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 PUT NORWEGIAN CRUISE LIN$27.5       EXP 03/05/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '3/5/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '3/5/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '30.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '3088');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '91.00 HELLO PAL INTERNTNL I0 F');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '3/5/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '113.48');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '190');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '1.00 CALL PAYPAL HOLDINGS INC$340        EXP 05/21/21');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', '3/5/2021');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '3/8/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '109.35');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '3602');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '0');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '35.00 SPARTAN ACQUISITI 25 XXXCORP ACT  EFF: 07/09/21');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', '1/27/2021');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '4/20/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '51.45');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '1749');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '1.00 CALL NVIDIA CORP        $640        EXP 04/30/21');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '4/22/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '4/23/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '209.35');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '1404');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '1.00 CALL AMAZON.COM INC     $3370       EXP 05/21/21');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', '5/10/2021'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '5/11/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '668.35');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '2099');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '3.00 PUT SPDR S&P 500        $422        EXP 06/23/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '6/23/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '6/23/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '76.01');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '2001');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '60.00 RITE AID CORP');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', '6/24/2021'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '6/24/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '1061.99');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '2525');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '2.00 CALL SPDR S&P 500       $427        EXP 06/28/21');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '6/28/2021'); 
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '6/28/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '52.67');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '2088');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');

		   //Row 13
		   idom.querySelector('#txtDescrip13').setAttribute('value', '1.00 CALL PROCURE ETF TRUST I$31         EXP 07/16/21');
		   idom.querySelector('#txtAcqDate13').setAttribute('value', '7/8/2021'); 
		   idom.querySelector('#txtSaleDate13').setAttribute('value', '7/9/2021');
		   idom.querySelector('#txtSalesPrice13').setAttribute('value', '34.35');
		   idom.querySelector('#txtBuyPrice13').setAttribute('value', '3203');
		   idom.querySelector('#txtCode13').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj13').setAttribute('value', '0');

		   //Row 14
		   idom.querySelector('#txtDescrip14').setAttribute('value', '3.00 FORTE BIOSCIENCES');
		   idom.querySelector('#txtAcqDate14').setAttribute('value', '9/3/2021');
		   idom.querySelector('#txtSaleDate14').setAttribute('value', '9/8/2021');
		   idom.querySelector('#txtSalesPrice14').setAttribute('value', '12.52');
		   idom.querySelector('#txtBuyPrice14').setAttribute('value', '3922');
		   idom.querySelector('#txtCode14').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj14').setAttribute('value', '0');

		    let ty = idom.evaluate('//*[@id="btnAddForms"]', document, null, 
						XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		   ty.click();

		   setTimeout(() => {

							const mt = document.querySelector('#PopUpModalDialogiFrame');
   							const nt = mt.contentWindow.document;
						    nt.querySelector("#lnkf8949lt").click();
										}, 5000);
			
			setTimeout(() => {
							const mt = document.querySelector('#PopUpModalDialogiFrame');
						    const nt = mt.contentWindow.document;
							nt.querySelector("#AddMoreFormBodyYes").click();
										}, 7000);

       }
    })
});


let copy3B = document.querySelector('#copy3B');
copy3B.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow:true});

    chrome.scripting.executeScript({ 
        target: {tabId: tab.id},
        function: () => {

        	const iframe = document.querySelector('#iFrameFilingForm');
        	const idom = iframe.contentWindow.document;
        	//Row 1                     
           idom.querySelector('#txtDescrip1').setAttribute('value', '25.00 SMITH MICRO SOFTWARE');
           idom.querySelector('#txtAcqDate1').setAttribute('value', '8/9/2021');
		   idom.querySelector('#txtSaleDate1').setAttribute('value', '9/8/2021');
		   idom.querySelector('#txtSalesPrice1').setAttribute('value', '121.84');
		   idom.querySelector('#txtBuyPrice1').setAttribute('value', '3933');
		   idom.querySelector('#txtCode1').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj1').setAttribute('value', '0');
		 
		   //Row 2
		   idom.querySelector('#txtDescrip2').setAttribute('value', '2.00 CALL KROGER CO  $43  EXP 09/10/21');
		   idom.querySelector('#txtAcqDate2').setAttribute('value', '9/10/2021');
		   idom.querySelector('#txtSaleDate2').setAttribute('value', '9/10/2021');
		   idom.querySelector('#txtSalesPrice2').setAttribute('value', '34.69');
		   idom.querySelector('#txtBuyPrice2').setAttribute('value', '2934');
		   idom.querySelector('#txtCode2').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj2').setAttribute('value', '0');
		   
		   //Row 3
		   idom.querySelector('#txtDescrip3').setAttribute('value', '5.00 CALL KROGER CO          $43.5       EXP 09/10/21');
		   idom.querySelector('#txtAcqDate3').setAttribute('value', '9/10/2021');
		   idom.querySelector('#txtSaleDate3').setAttribute('value', '9/10/2021');
		   idom.querySelector('#txtSalesPrice3').setAttribute('value', '16.7');
		   idom.querySelector('#txtBuyPrice3').setAttribute('value', '1317');
		   idom.querySelector('#txtCode3').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj3').setAttribute('value', '0');
		   
		   //Row 4
		   idom.querySelector('#txtDescrip4').setAttribute('value', '1.00 CALL KROGER CO          $41         EXP 09/24/21');
		   idom.querySelector('#txtAcqDate4').setAttribute('value', '9/10/2021');
		   idom.querySelector('#txtSaleDate4').setAttribute('value', '9/13/2021');
		   idom.querySelector('#txtSalesPrice4').setAttribute('value', '249.35');
		   idom.querySelector('#txtBuyPrice4').setAttribute('value', '2094');
		   idom.querySelector('#txtCode4').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj4').setAttribute('value', '0');
		   
		   //Row 5
		   idom.querySelector('#txtDescrip5').setAttribute('value', '1.00 CALL LUCID GROUP INC    $17.5       EXP 10/15/21');
		   idom.querySelector('#txtAcqDate5').setAttribute('value', '9/14/2021');
		   idom.querySelector('#txtSaleDate5').setAttribute('value', '9/15/2021');
		   idom.querySelector('#txtSalesPrice5').setAttribute('value', '297.35');
		   idom.querySelector('#txtBuyPrice5').setAttribute('value', '1157');
		   idom.querySelector('#txtCode5').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj5').setAttribute('value', '0');
		   
		   //Row 6
		   idom.querySelector('#txtDescrip6').setAttribute('value', '4.00 BEACHBODY CO INC');
		   idom.querySelector('#txtAcqDate6').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate6').setAttribute('value', '9/15/2021');
		   idom.querySelector('#txtSalesPrice6').setAttribute('value', '25.2');
		   idom.querySelector('#txtBuyPrice6').setAttribute('value', '2672');
		   idom.querySelector('#txtCode6').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj6').setAttribute('value', '19.5');
		   
		   //Row 7
		   idom.querySelector('#txtDescrip7').setAttribute('value', '12.00 BEACHBODY CO INC');
		   idom.querySelector('#txtAcqDate7').setAttribute('value', 'Various');
		   idom.querySelector('#txtSaleDate7').setAttribute('value', '9/15/2021');
		   idom.querySelector('#txtSalesPrice7').setAttribute('value', '75.6');
		   idom.querySelector('#txtBuyPrice7').setAttribute('value', '3209');
		   idom.querySelector('#txtCode7').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj7').setAttribute('value', '0');

		   //Row 8
		   idom.querySelector('#txtDescrip8').setAttribute('value', '14.00 BEACHBODY CO INC');
		   idom.querySelector('#txtAcqDate8').setAttribute('value', '7/2/2021'); 
		   idom.querySelector('#txtSaleDate8').setAttribute('value', '9/15/2021');
		   idom.querySelector('#txtSalesPrice8').setAttribute('value', '88.2');
		   idom.querySelector('#txtBuyPrice8').setAttribute('value', '2674');
		   idom.querySelector('#txtCode8').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj8').setAttribute('value', '0');

		   //Row 9
		   idom.querySelector('#txtDescrip9').setAttribute('value', '72.00 BEACHBODY CO INC');
		   idom.querySelector('#txtAcqDate9').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate9').setAttribute('value', '9/15/2021');
		   idom.querySelector('#txtSalesPrice9').setAttribute('value', '452.94');
		   idom.querySelector('#txtBuyPrice9').setAttribute('value', '52');
		   idom.querySelector('#txtCode9').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj9').setAttribute('value', '0');

		   //Row 10
		   idom.querySelector('#txtDescrip10').setAttribute('value', '1.00 CALL SPDR S&P 500       $444        EXP 09/22/21');
		   idom.querySelector('#txtAcqDate10').setAttribute('value', '9/16/2021'); 
		   idom.querySelector('#txtSaleDate10').setAttribute('value', '9/16/2021');
		   idom.querySelector('#txtSalesPrice10').setAttribute('value', '322.35');
		   idom.querySelector('#txtBuyPrice10').setAttribute('value', '1052');
		   idom.querySelector('#txtCode10').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj10').setAttribute('value', '0');

		   //Row 11
		   idom.querySelector('#txtDescrip11').setAttribute('value', '50.00 BEACHBODY CO INC');
		   idom.querySelector('#txtAcqDate11').setAttribute('value', 'Various'); 
		   idom.querySelector('#txtSaleDate11').setAttribute('value', '9/16/2021');
		   idom.querySelector('#txtSalesPrice11').setAttribute('value', '359.75');
		   idom.querySelector('#txtBuyPrice11').setAttribute('value', '2255');
		   idom.querySelector('#txtCode11').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj11').setAttribute('value', '0');

		   //Row 12
		   idom.querySelector('#txtDescrip12').setAttribute('value', '2.00 LUCID GROUP INC');
		   idom.querySelector('#txtAcqDate12').setAttribute('value', '7/15/2021');
		   idom.querySelector('#txtSaleDate12').setAttribute('value', '11/10/2021');
		   idom.querySelector('#txtSalesPrice12').setAttribute('value', '85.7');
		   idom.querySelector('#txtBuyPrice12').setAttribute('value', '3124');
		   idom.querySelector('#txtCode12').setAttribute('value', '0');
		   idom.querySelector('#txtAmtOfAdj12').setAttribute('value', '0');



       }
    })
});
