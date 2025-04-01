
    //----------------Pyrolysis thermocouple traces-----------------------//  
    var pyrolysis_traces = [
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Dissolution Tank"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Dissolution Heating Tape"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Valve"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Char Chamber"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Secondary Reactor"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Knockout Drum"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Condenser 0"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Condenser 1"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Condenser 2"
        },
    ]

    //----------------Bioreactor thermocouple traces-----------------------//
    var bio_thermo_traces = [
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Thermocouple 1"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Thermocouple 2"
        }
    ]

    //----------------Bioreactor pH traces-----------------------//
    var bio_ph_traces = [
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "pH Sensor 1"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "pH Sensor 2"
        }
    ]

    //----------------Bioreactor dissolved oxygen traces-----------------------//
    var bio_oxygen_traces = [
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Dissolved O2 1"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Dissolved O2 2"
        }
    ]

    //----------------Bioreactor turbidity traces-----------------------//
    var bio_turbidity_traces = [
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Turbidity 1"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Turbidity 2"
        }
    ]

    //----------------Bioreactor Post Processing traces-----------------------//
    var bio_pro_traces = [
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Pasteurization"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Dryer"
        }
    ]

    //----------------Chemreactor thermocouple traces-----------------------//
    var chem_thermo_traces = [
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Reactor 1"
        },
        {
            y: [],
            x: [],
            type: 'scatter',
            mode: "lines",
            name: "Reactor 2"
        }
    ]

    //----------------Thermocouple graph layout-----------------------//
    var thermocouple_layout = {
        title: 'Temperature Data',
        xaxis: {
            title: 'Time',
            autorange: true,
            rangeselector: {buttons: [
                {
                count: 1,
                label: '1h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 6,
                label: '6h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 12,
                label: '12h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 24,
                label: '24h',
                step: 'hour',
                stepmode: 'backward'
                },
                {step: 'all'}
            ]},
            type: 'date'
        },
        yaxis: {
            title: 'Degrees Celsius'
        },
        showlegend: true
    };

    var bio_thermo_layout = {
        title: 'Temperature Data',
        xaxis: {
            title: 'Time',
            autorange: true,
            rangeselector: {buttons: [
                {
                count: 1,
                label: '1h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 6,
                label: '6h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 12,
                label: '12h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 24,
                label: '24h',
                step: 'hour',
                stepmode: 'backward'
                },
                {step: 'all'}
            ]},
            type: 'date'
        },
        yaxis: {
            title: 'Degrees Celsius'
        },
        showlegend: true
    };

    var chem_thermo_layout = {
        title: 'Temperature Data',
        xaxis: {
            title: 'Time',
            autorange: true,
            rangeselector: {buttons: [
                {
                count: 1,
                label: '1h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 6,
                label: '6h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 12,
                label: '12h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 24,
                label: '24h',
                step: 'hour',
                stepmode: 'backward'
                },
                {step: 'all'}
            ]},
            type: 'date'
        },
        yaxis: {
            title: 'Degrees Celsius'
        },
        showlegend: true
    };

    //----------------pH graph layout-----------------------//
    var pH_layout = {
        title: 'pH Data',
        xaxis: {
            title: 'Time',
            autorange: true,
            rangeselector: {buttons: [
                {
                count: 1,
                label: '1h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 6,
                label: '6h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 12,
                label: '12h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 24,
                label: '24h',
                step: 'hour',
                stepmode: 'backward'
                },
                {step: 'all'}
            ]},
            type: 'date'
        },
        yaxis: {
            title: 'pH'
        },
        showlegend: true
    };

    //----------------Dissolved oxygen graph layout-----------------------//
    var oxygen_layout = {
        title: 'Dissolved Oxygen Data',
        xaxis: {
            title: 'Time',
            autorange: true,
            rangeselector: {buttons: [
                {
                count: 1,
                label: '1h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 6,
                label: '6h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 12,
                label: '12h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 24,
                label: '24h',
                step: 'hour',
                stepmode: 'backward'
                },
                {step: 'all'}
            ]},
            type: 'date'
        },
        yaxis: {
            title: 'Dissolved Oxygen (mL)'
        },
        showlegend: true
    };

    //----------------Turbidity graph layout-----------------------//
    var turbidity_layout = {
        title: 'Turbidity Data',
        xaxis: {
            title: 'Time',
            autorange: true,
            rangeselector: {buttons: [
                {
                count: 1,
                label: '1h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 6,
                label: '6h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 12,
                label: '12h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 24,
                label: '24h',
                step: 'hour',
                stepmode: 'backward'
                },
                {step: 'all'}
            ]},
            type: 'date'
        },
        yaxis: {
            title: 'Turbidity (NTU)'
        },
        showlegend: true
    };

    //----------------Post Processing graph layout-----------------------//
    var pro_layout = {
        title: 'Post Processing Data',
        xaxis: {
            title: 'Time',
            autorange: true,
            rangeselector: {buttons: [
                {
                count: 1,
                label: '1h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 6,
                label: '6h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 12,
                label: '12h',
                step: 'hour',
                stepmode: 'backward'
                },
                {
                count: 24,
                label: '24h',
                step: 'hour',
                stepmode: 'backward'
                },
                {step: 'all'}
            ]},
            type: 'date'
        },
        yaxis: {
            title: 'Degrees Celsius'
        },
        showlegend: true
    };

    //----------------Standard Gauge Layout-----------------------//
    var gaugeLayout = { width: 270, height: 220, margin: { t: 0, b: 0, l: 40, r: 40} };

    //----------------Thermocouple Gauge-----------------------//
    var thermo_gauge = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: 0,
        title: { text: "" },
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 200 },
        number: {'valueformat':'.1f'},
        gauge: {
            axis: { range: [null, 400] },
            bar: { color: "blue" },
            steps: [
                { range: [0, 400], color: "#dddddd" },
                { range: [145, 155], color: "yellow" },
                { range: [195, 205], color: "green" },
                { range: [245, 255], color: "red" }
            ],
        }
    }];

    var thermo_bio_gauge = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: 0,
        title: { text: "" },
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 200 },
        number: {'valueformat':'.1f'},
        gauge: {
            axis: { range: [null, 400] },
            bar: { color: "blue" },
            steps: [
                { range: [0, 400], color: "#dddddd" },
            ],
        }
    }];

    //----------------pH Gauge-----------------------//
    var pH_gauge = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: 0,
        title: { text: "" },
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 7},
        number: {'valueformat':'.2f'},
        gauge: {
            axis: { range: [null, 14] },
            bar: { color: "green" },
            steps: [
                { range: [0, 14], color: "#dddddd" },
            ],
            threshold: {
                line: { color: "red", width: 4 },
                thickness: 0.75,
                value: 7
            }
        }
    }];

    //----------------Dissolved Oxygen Gauge-----------------------//
    var oxygen_gauge = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: 0,
        title: { text: "" },
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 50 },
        number: {'valueformat':'.2f'},
        gauge: {
            axis: { range: [null, 100] },
            bar: { color: "green" },
            steps: [
                { range: [0, 100], color: "#dddddd" },
            ],
        }
    }];

    //----------------Turbidity Gauge-----------------------//
    var turbidity_gauge = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: 0,
        title: { text: "" },
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 1 },
        number: {'valueformat':'.2f'},
        gauge: {
            axis: { range: [null, 6] },
            bar: { color: "green" },
            steps: [
                { range: [0, 6], color: "#dddddd" },
            ],
        }
    }];

    //----------------Motor Gauge-----------------------//
    var motor_gauge = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: 0,
        title: { text: "" },
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 50 },
        gauge: {
            axis: { range: [null, 100] },
            bar: { color: "green" },
            steps: [
                { range: [0, 100], color: "#dddddd" },
            ],
        }
    }];

    //----------------Pyrolysis Gauges-----------------------//
    var pyrolysisGaugeInfo = {
        "pyrolysis-thermo-gauge1": {
            title: "Dissolution Tank",
            setpoint: 200,
            value: 0,
        },
        "pyrolysis-thermo-gauge2": {
            title: "Valve",
            setpoint: 200,
            value: 0,
        },
        "pyrolysis-thermo-gauge3": {
            title: "Char Chamber",
            setpoint: 200,
            value: 0,
        },
        "pyrolysis-thermo-gauge4": {
            title: "Secondary Reactor",
            setpoint: 200,
            value: 0,
        },
        "pyrolysis-thermo-gauge5": {
            title: "Knockout Drum",
            setpoint: 200,
            value: 0,
        },
        "pyrolysis-thermo-gauge6": {
            title: "Condenser 0 Heater",
            setpoint: 200,
            value: 0,
        },
        "pyrolysis-thermo-gauge7": {
            title: "Condenser 0 Fan",
            setpoint: 200,
            value: 0,
        },
        "pyrolysis-thermo-gauge8": {
            title: "Condenser 1 Heater",
            setpoint: 200,
            value: 0,
        },
        "pyrolysis-thermo-gauge9": {
            title: "Condenser 1 Fan",
            setpoint: 200,
            value: 0,
        },
        "pyrolysis-thermo-gauge10": {
            title: "Condenser 2 Fan",
            setpoint: 200,
            value: 0,
        },
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();

    //create new gauge plots
    Plotly.newPlot('pyrolysis-thermo-gauge1', thermo_gauge, gaugeLayout);
    Plotly.newPlot('pyrolysis-thermo-gauge2', thermo_gauge, gaugeLayout);
    Plotly.newPlot('pyrolysis-thermo-gauge3', thermo_gauge, gaugeLayout);
    Plotly.newPlot('pyrolysis-thermo-gauge4', thermo_gauge, gaugeLayout);
    Plotly.newPlot('pyrolysis-thermo-gauge5', thermo_gauge, gaugeLayout);
    Plotly.newPlot('pyrolysis-thermo-gauge6', thermo_gauge, gaugeLayout);
    Plotly.newPlot('pyrolysis-thermo-gauge7', thermo_gauge, gaugeLayout);
    Plotly.newPlot('pyrolysis-thermo-gauge8', thermo_gauge, gaugeLayout);
    Plotly.newPlot('pyrolysis-thermo-gauge9', thermo_gauge, gaugeLayout);
    Plotly.newPlot('pyrolysis-thermo-gauge10', thermo_gauge, gaugeLayout);

    //adjust titles
    Plotly.restyle('pyrolysis-thermo-gauge1', {title: pyrolysisGaugeInfo['pyrolysis-thermo-gauge1'].title})
    Plotly.restyle('pyrolysis-thermo-gauge2', {title: pyrolysisGaugeInfo['pyrolysis-thermo-gauge2'].title})
    Plotly.restyle('pyrolysis-thermo-gauge3', {title: pyrolysisGaugeInfo['pyrolysis-thermo-gauge3'].title})
    Plotly.restyle('pyrolysis-thermo-gauge4', {title: pyrolysisGaugeInfo['pyrolysis-thermo-gauge4'].title})
    Plotly.restyle('pyrolysis-thermo-gauge5', {title: pyrolysisGaugeInfo['pyrolysis-thermo-gauge5'].title})
    Plotly.restyle('pyrolysis-thermo-gauge6', {title: pyrolysisGaugeInfo['pyrolysis-thermo-gauge6'].title})
    Plotly.restyle('pyrolysis-thermo-gauge7', {title: pyrolysisGaugeInfo['pyrolysis-thermo-gauge7'].title})
    Plotly.restyle('pyrolysis-thermo-gauge8', {title: pyrolysisGaugeInfo['pyrolysis-thermo-gauge8'].title})
    Plotly.restyle('pyrolysis-thermo-gauge9', {title: pyrolysisGaugeInfo['pyrolysis-thermo-gauge9'].title})
    Plotly.restyle('pyrolysis-thermo-gauge10', {title: pyrolysisGaugeInfo['pyrolysis-thermo-gauge10'].title})

    //----------------Bioreactor Gauges-----------------------//
    var bioGaugeInfo = {
        "bio-thermo-gauge1": {
            title: "Thermocouple 1",
            value: 0,
        },
        "bio-ph-gauge1": {
            title: "pH Sensor 1",
            value: 0,
            setpoint: 0,
        },
        "bio-oxygen-gauge1": {
            title: "Dissolved Oxygen 1",
            value: 0,
        },
        "bio-turbidity-gauge1": {
            title: "Turbidity 1",
            value: 0,
        },
        "bio-thermo-gauge2": {
            title: "Thermocouple 2",
            value: 0,
        },
        "bio-ph-gauge2": {
            title: "pH Sensor 2",
            value: 0,
            setpoint: 0,
        },
        "bio-oxygen-gauge2": {
            title: "Dissolved Oxygen 2",
            value: 0,
        },
        "bio-turbidity-gauge2": {
            title: "Turbidity 2",
            value: 0,
        },
        "bio-pro-gauge1": {
            title: "Pasteurization",
            value: 0,
        },
        "bio-pro-gauge2": {
            title: "Dryer",
            value: 0,
        },
    }
    var motorGaugeInfo = {
        "bio-stirring-gauge1": {
            title: "Stirring Motor 1",
        },
        "bio-pump1-gauge1": {
            title: "Base Pump 1",
        },
        "bio-pump2-gauge1": {
            title: "Acid Pump 1",
        },
        "bio-pump3-gauge1": {
            title: "Water Pump",
        },
        "bio-pump4-gauge1": {
            title: "Spent Media Pump",
        },
        "bio-stirring-gauge2": {
            title: "Stirring Motor 2",
        },
        "bio-pump1-gauge2": {
            title: "Base Pump 2",
        },
        "bio-pump2-gauge2": {
            title: "Acid Pump 2",
        },
        "bio-pump3-gauge2": {
            title: "Harvest Pump",
        },
        "bio-pump4-gauge2": {
            title: "TFF Pump",
        },
        "chem-pump1-gauge1": {
            title: "Ammon. Hydrox. Loading"
        },
        "chem-pump2-gauge1": {
            title: "Liquid Transfer"
        },
        "chem-pump3-gauge1": {
            title: "Water Dilute"
        },
        "chem-pump4-gauge1": {
            title: "Reactor Wash"
        }
    }
    //create new gauge plots
    Plotly.newPlot('bio-thermo-gauge1', thermo_bio_gauge, gaugeLayout);
    Plotly.newPlot('bio-thermo-gauge2', thermo_bio_gauge, gaugeLayout);

    Plotly.newPlot('bio-ph-gauge1', pH_gauge, gaugeLayout);
    Plotly.newPlot('bio-ph-gauge2', pH_gauge, gaugeLayout);

    Plotly.newPlot('bio-oxygen-gauge1', oxygen_gauge, gaugeLayout);
    Plotly.newPlot('bio-oxygen-gauge2', oxygen_gauge, gaugeLayout);

    Plotly.newPlot('bio-turbidity-gauge1', turbidity_gauge, gaugeLayout);
    Plotly.newPlot('bio-turbidity-gauge2', turbidity_gauge, gaugeLayout);

    Plotly.newPlot("bio-stirring-gauge1", motor_gauge, gaugeLayout);
    Plotly.newPlot("bio-stirring-gauge2", motor_gauge, gaugeLayout);

    Plotly.newPlot("bio-pump1-gauge1", motor_gauge, gaugeLayout);
    Plotly.newPlot("bio-pump2-gauge1", motor_gauge, gaugeLayout);
    Plotly.newPlot("bio-pump3-gauge1", motor_gauge, gaugeLayout);
    Plotly.newPlot("bio-pump4-gauge1", motor_gauge, gaugeLayout);
    Plotly.newPlot("bio-pump1-gauge2", motor_gauge, gaugeLayout);
    Plotly.newPlot("bio-pump2-gauge2", motor_gauge, gaugeLayout);
    Plotly.newPlot("bio-pump3-gauge2", motor_gauge, gaugeLayout);
    Plotly.newPlot("bio-pump4-gauge2", motor_gauge, gaugeLayout);

    Plotly.newPlot('bio-pro-gauge1', thermo_gauge, gaugeLayout);
    Plotly.newPlot('bio-pro-gauge2', thermo_gauge, gaugeLayout);

    //restyle
    Plotly.restyle('bio-thermo-gauge1', {title: bioGaugeInfo["bio-thermo-gauge1"].title})
    Plotly.restyle('bio-thermo-gauge2', {title: bioGaugeInfo["bio-thermo-gauge2"].title})
    Plotly.restyle('bio-ph-gauge1', {title: bioGaugeInfo["bio-ph-gauge1"].title})
    Plotly.restyle('bio-ph-gauge2', {title: bioGaugeInfo["bio-ph-gauge2"].title})
    Plotly.restyle('bio-oxygen-gauge1', {title: bioGaugeInfo["bio-oxygen-gauge1"].title})
    Plotly.restyle('bio-oxygen-gauge2', {title: bioGaugeInfo["bio-oxygen-gauge2"].title})
    Plotly.restyle('bio-turbidity-gauge1', {title: bioGaugeInfo["bio-turbidity-gauge1"].title})
    Plotly.restyle('bio-turbidity-gauge2', {title: bioGaugeInfo["bio-turbidity-gauge2"].title})

    Plotly.restyle("bio-stirring-gauge1", {title: motorGaugeInfo["bio-stirring-gauge1"].title})
    Plotly.restyle("bio-stirring-gauge2", {title: motorGaugeInfo["bio-stirring-gauge2"].title})

    Plotly.restyle("bio-pump1-gauge1", {title: motorGaugeInfo["bio-pump1-gauge1"].title})
    Plotly.restyle("bio-pump2-gauge1", {title: motorGaugeInfo["bio-pump2-gauge1"].title})
    Plotly.restyle("bio-pump3-gauge1", {title: motorGaugeInfo["bio-pump3-gauge1"].title})
    Plotly.restyle("bio-pump4-gauge1", {title: motorGaugeInfo["bio-pump4-gauge1"].title})

    Plotly.restyle("bio-pump1-gauge2", {title: motorGaugeInfo["bio-pump1-gauge2"].title})
    Plotly.restyle("bio-pump2-gauge2", {title: motorGaugeInfo["bio-pump2-gauge2"].title})
    Plotly.restyle("bio-pump3-gauge2", {title: motorGaugeInfo["bio-pump3-gauge2"].title})
    Plotly.restyle("bio-pump4-gauge2", {title: motorGaugeInfo["bio-pump4-gauge2"].title})

    Plotly.restyle('bio-pro-gauge1', {title: bioGaugeInfo["bio-pro-gauge1"].title})
    Plotly.restyle('bio-pro-gauge2', {title: bioGaugeInfo["bio-pro-gauge2"].title})

    //----------------Chemreactor Gauges-----------------------//
    var chemGaugeInfo = {
        "chem-thermo-gauge1": {
            title: "Reactor 1",
            value: 0,
            setpoint: 0
        },
        "chem-thermo-gauge2": {
            title: "Reactor 2",
            value: 0,
            setpoint: 0
        } 
    }
    Plotly.newPlot("chem-thermo-gauge1", thermo_gauge, gaugeLayout);
    Plotly.newPlot("chem-thermo-gauge2", thermo_gauge, gaugeLayout);

    Plotly.newPlot("chem-pump1-gauge1", motor_gauge, gaugeLayout);
    Plotly.newPlot("chem-pump2-gauge1", motor_gauge, gaugeLayout);
    Plotly.newPlot("chem-pump3-gauge1", motor_gauge, gaugeLayout);
    Plotly.newPlot("chem-pump4-gauge1", motor_gauge, gaugeLayout);

    Plotly.restyle('chem-thermo-gauge1', {title: chemGaugeInfo["chem-thermo-gauge1"].title})
    Plotly.restyle('chem-thermo-gauge2', {title: chemGaugeInfo["chem-thermo-gauge2"].title})

    Plotly.restyle('chem-pump1-gauge1', {title: motorGaugeInfo["chem-pump1-gauge1"].title})
    Plotly.restyle('chem-pump2-gauge1', {title: motorGaugeInfo["chem-pump2-gauge1"].title})
    Plotly.restyle('chem-pump3-gauge1', {title: motorGaugeInfo["chem-pump3-gauge1"].title})
    Plotly.restyle('chem-pump4-gauge1', {title: motorGaugeInfo["chem-pump4-gauge1"].title})

    //--------------------------------------------------------------------------//

    function loadData() {
        //Get Data	
        fetch('pyrolysis-data.csv') 
        .then(response => response.text())
        .then(text => {
            let row = text.split("\r\n") //split entries by row

            for(let n = 1; n < row.length; n++) {
                let data = row[n].split(',')
                for(let x = 0; x < pyrolysis_traces.length; x++) {
                    pyrolysis_traces[x].x.push(data[0])     //data[0] pushes time to the x axis
                    pyrolysis_traces[x].y.push(data[x+1])   //data[x+1] to avoid pushing the date and time
                }
            }

            //Plot data
            Plotly.newPlot('pyrolysis-thermo-graph', pyrolysis_traces, thermocouple_layout, {scrollZoom: true});                                
        })

        //load bioreactor data
        fetch('bioreactor-data.csv')
        .then(response => response.text())
        .then(text => {
            let row = text.split("\r\n") //split entries by row

            for(let n = 1; n < row.length; n++) {
                let data = row[n].split(',')
                for(let x = 0; x < 2; x++) {
                    bio_thermo_traces[x].x.push(data[0])    //data[0] pushes time to the x axis
                    bio_ph_traces[x].x.push(data[0])        
                    bio_oxygen_traces[x].x.push(data[0])
                    bio_turbidity_traces[x].x.push(data[0])
                    bio_pro_traces[x].x.push(data[0])
                    
                    bio_thermo_traces[x].y.push(data[x*4+1]) 
                    bio_ph_traces[x].y.push(data[x*4+2])    
                    bio_oxygen_traces[x].y.push(data[x*4+3]) 
                    bio_turbidity_traces[x].y.push(data[x*4+4]) 
                    bio_pro_traces[x].y.push(data[x+9]) 
                }
            }

            //Plot data
            Plotly.newPlot('bio-thermo-graph', bio_thermo_traces, bio_thermo_layout, {scrollZoom: true});                    
            Plotly.newPlot('bio-ph-graph', bio_ph_traces, pH_layout, {scrollZoom: true});
            Plotly.newPlot('bio-oxygen-graph', bio_oxygen_traces, oxygen_layout, {scrollZoom: true});
            Plotly.newPlot('bio-turbidity-graph', bio_turbidity_traces, turbidity_layout, {scrollZoom: true});
            Plotly.newPlot('bio-pro-graph', bio_pro_traces, pro_layout, {scrollZoom: true});
        })

        //load chemreactor data
        fetch('chemreactor-data.csv')
        .then(response => response.text())
        .then(text => {
            let row = text.split("\r\n") //split entries by row
            for(let n = 1; n < row.length; n++) {
                let data = row[n].split(',')
                for(let x = 0; x < 2; x++) {
                    chem_thermo_traces[x].x.push(data[0])
                    chem_thermo_traces[x].y.push(data[x+1])
                }
            }
            Plotly.newPlot('chem-thermo-graph', chem_thermo_traces, chem_thermo_layout, {scrollZoom: true});
        })


        //send time to ESP32
        var now = new Date();
        var rtcTime = now.toLocaleTimeString('en-US', {hour12: false}).split(":")
        rtcTime[2] = parseInt(rtcTime[2])
        var rtcDate = now.toLocaleDateString().split("/")
        fetch(window.location.href + "get-variables", {
            method: "POST",
            headers: {
            'Content-Type': 'text/plain',
            },
            body: rtcTime[2]+","+rtcTime[1]+","+rtcTime[0]+","+rtcDate[1]+","+rtcDate[0]+","+rtcDate[2],
        })
        .then(response => response.text()) // Get the response as text
        .then(textData => {
            let sections = textData.split('-')
            if(sections[0] == "logging") {
                logging = true;
                document.getElementById("run").textContent = "Logging Data..."
            } else if(sections[0] == "not logging") {
                logging = false;
                document.getElementById("run").textContent = "Start Logging Data"
            }

            // load previous control parameters
            console.log('Control Parameters: ', sections)

            let pyrolysis = sections[1].split(',')
            for(let x = 0; x < pyrolysis.length; x++) {
                //p[0] setpoint, p[1] Kp, p[2] Ki, p[3] Kd
                let p = pyrolysis[x].split('|')
                let id = "pyrolysis-thermo-gauge" + (x+1)
                document.getElementById(id + "-amount").value = p[0]
                pyrolysisGaugeInfo[id].setpoint = p[0]
                document.getElementById(id + "-kp").value = p[1]
                document.getElementById(id + "-ki").value = p[2]
                document.getElementById(id + "-kd").value = p[3]
                updatePyrolysisGauge(id)
            }

            let bioPh = sections[2].split(',')
            for(let x = 0; x < bioPh.length; x++) {
                let b = bioPh[x].split('|')
                let id = "bio-ph-gauge" + (x+1)
                document.getElementById(id + "-amount").value = b[0]
                bioGaugeInfo[id].setpoint = b[0]
                document.getElementById(id + "-kp").value = b[1]
                document.getElementById(id + "-ki").value = b[2]
                document.getElementById(id + "-kd").value = b[3]
                updateBioPhGauge(id)
            }

            let turb = sections[3].split(',')
            document.getElementById("bio-turbidity-gauge1-amount").value = turb[0]
            document.getElementById("bio-turbidity-gauge2-amount").value = turb[1]
            Plotly.restyle('bio-turbidity-gauge1', {title: bioGaugeInfo["bio-turbidity-gauge1"].title, value: turb[0]})
            Plotly.restyle('bio-turbidity-gauge2', {title: bioGaugeInfo["bio-turbidity-gauge2"].title, value: turb[1]})

            let bioPro = sections[4].split(',')
            for(let x = 0; x < bioPro.length; x++) {
                let b = bioPro[x].split('|')
                let id = "bio-pro-gauge" + (x+1)
                document.getElementById(id + "-amount").value = b[0]
                bioGaugeInfo[id].setpoint = b[0]
                document.getElementById(id + "-kp").value = b[1]
                document.getElementById(id + "-ki").value = b[2]
                document.getElementById(id + "-kd").value = b[3]
                updateBioProGauge(id)
            }

            let bio = sections[5].split(',')
            document.getElementById("bio-stirring-gauge1-amount").value = bio[0]
            document.getElementById("bio-stirring-gauge2-amount").value = bio[6]
            Plotly.restyle('bio-stirring-gauge1', {title: motorGaugeInfo["bio-stirring-gauge1"].title, value: bio[0]})
            Plotly.restyle('bio-stirring-gauge2', {title: motorGaugeInfo["bio-stirring-gauge2"].title, value: bio[6]})
            for(let x = 0; x < 4; x++) {
                let id = "bio-pump" + (x+1) + "-gauge1" 
                document.getElementById(id + "-amount").value = bio[x+1]
                Plotly.restyle(id, {title: motorGaugeInfo[id].title, value: bio[x+1]})
            }
            for(let x = 0; x < 4; x++) {
                let id = "bio-pump" + (x+1) + "-gauge2"
                document.getElementById(id + "-amount").value = bio[x+5]
                Plotly.restyle(id, {title: motorGaugeInfo[id].title, value: bio[x+7]})
            }

            let chem = sections[6].split(',')
            document.getElementById("chem-pump1-gauge1-amount").value = parseInt(chem[0])
            document.getElementById("chem-pump2-gauge1-amount").value = parseInt(chem[1])
            document.getElementById("chem-pump3-gauge1-amount").value = parseInt(chem[2])
            document.getElementById("chem-pump4-gauge1-amount").value = parseInt(chem[3])

            Plotly.restyle('chem-pump1-gauge1', {title: motorGaugeInfo["chem-pump1-gauge1"].title, value: parseInt(chem[0])})
            Plotly.restyle('chem-pump2-gauge1', {title: motorGaugeInfo["chem-pump2-gauge1"].title, value: parseInt(chem[1])})
            Plotly.restyle('chem-pump3-gauge1', {title: motorGaugeInfo["chem-pump3-gauge1"].title, value: parseInt(chem[2])})
            Plotly.restyle('chem-pump4-gauge1', {title: motorGaugeInfo["chem-pump4-gauge1"].title, value: parseInt(chem[3])})

            let chemThermo = sections[7].split(',')
            for(let x = 0; x < chemThermo.length; x++) {
                let c = chemThermo[x].split('|')
                let id = "chem-thermo-gauge" + (x+1)
                document.getElementById(id + "-amount").value = c[0]
                chemGaugeInfo[id].setpoint = c[0]
                document.getElementById(id + "-kp").value = c[1]
                document.getElementById(id + "-ki").value = c[2]
                document.getElementById(id + "-kd").value = c[3]
                updateChemGauge(id)
            }
            
        })
    }

    var pUpdateCounter = 2;
    var bUpdateCounter = 2;
    var cUpdateCounter = 2;

    if (!!window.EventSource) {
        var source = new EventSource('/events');

        source.addEventListener('open', function(e) {
            console.log("Events Connected");
            document.getElementById("connection").style.backgroundColor = "green"; // Change this to the desired color when connected
        }, false);

        source.addEventListener('error', function(e) {
            if (e.target.readyState != EventSource.OPEN) {
                console.log("Events Disconnected");
                document.getElementById("connection").style.backgroundColor = "red"; // Change this to the desired color when disconnected
            }
        }, false);

        source.addEventListener('pyrolysis-readings', function(e) {
            var pyrolysisVals = e.data.split(',')

            pyrolysisGaugeInfo["pyrolysis-thermo-gauge1"].value = pyrolysisVals[1];   //DT
            pyrolysisGaugeInfo["pyrolysis-thermo-gauge2"].value = pyrolysisVals[3];   // V
            pyrolysisGaugeInfo["pyrolysis-thermo-gauge3"].value = pyrolysisVals[4];   // CC
            pyrolysisGaugeInfo["pyrolysis-thermo-gauge4"].value = pyrolysisVals[5];   // SR
            pyrolysisGaugeInfo["pyrolysis-thermo-gauge5"].value = pyrolysisVals[6];   // KD
            pyrolysisGaugeInfo["pyrolysis-thermo-gauge6"].value = pyrolysisVals[7];   // C0H
            pyrolysisGaugeInfo["pyrolysis-thermo-gauge7"].value = pyrolysisVals[7];   // C0F
            pyrolysisGaugeInfo["pyrolysis-thermo-gauge8"].value = pyrolysisVals[8];   // C1H
            pyrolysisGaugeInfo["pyrolysis-thermo-gauge9"].value = pyrolysisVals[8];   // C1F
            pyrolysisGaugeInfo["pyrolysis-thermo-gauge10"].value = pyrolysisVals[9];  // C2F
            
            let ids = Object.keys(pyrolysisGaugeInfo)
            ids.forEach((id) => {
                updatePyrolysisGauge(id)
            })
            
            //plot values
            if(logging) {
                pUpdateCounter += 1
                //could use a for loop but I only want to call extendTraces once
                if(pUpdateCounter >= 2) {
                    pUpdateCounter = 0
                    Plotly.extendTraces('pyrolysis-thermo-graph', {
                        x: [[pyrolysisVals[0]],[pyrolysisVals[0]],[pyrolysisVals[0]],[pyrolysisVals[0]],[pyrolysisVals[0]],[pyrolysisVals[0]],[pyrolysisVals[0]],[pyrolysisVals[0]],[pyrolysisVals[0]]],
                        y: [[pyrolysisVals[1]],[pyrolysisVals[2]],[pyrolysisVals[3]],[pyrolysisVals[4]],[pyrolysisVals[5]],[pyrolysisVals[6]],[pyrolysisVals[7]],[pyrolysisVals[8]],[pyrolysisVals[9]]]
                    }, [0, 1, 2, 3, 4, 5, 6, 7, 8])
                }

                if(document.getElementById('pyrolysis-tracking').textContent == 'Tracking Data...') {
                    trackData(document.getElementById('pyrolysis-tracking-amount').value, 'pyrolysis-thermo-graph')
                }
                if(document.getElementById('bio-thermo-tracking').textContent == 'Tracking Data...') {
                    trackData(document.getElementById('bio-thermo-tracking-amount').value, 'bio-thermo-graph')
                }
                if(document.getElementById('bio-ph-tracking').textContent == 'Tracking Data...') {
                    trackData(document.getElementById('bio-ph-tracking-amount').value, 'bio-ph-graph')
                }
                if(document.getElementById('bio-oxygen-tracking').textContent == 'Tracking Data...') {
                    trackData(document.getElementById('bio-oxygen-tracking-amount').value, 'bio-oxygen-graph')
                }
                if(document.getElementById('bio-turbidity-tracking').textContent == 'Tracking Data...') {
                    trackData(document.getElementById('bio-turbidity-tracking-amount').value, 'bio-turbidity-graph')
                }
                if(document.getElementById('chem-thermo-tracking').textContent == 'Tracking Data...') {
                    trackData(document.getElementById('chem-thermo-tracking-amount').value, 'chem-thermo-graph')
                }
            }
        }, false);

        source.addEventListener('bioreactor-readings', function(e) {
            var bioVals = e.data.split(',')

            bioGaugeInfo["bio-thermo-gauge1"].value = bioVals[1]
            bioGaugeInfo["bio-ph-gauge1"].value = bioVals[2]
            bioGaugeInfo["bio-oxygen-gauge1"].value = bioVals[3]
            bioGaugeInfo["bio-turbidity-gauge1"].value = bioVals[4]
            bioGaugeInfo["bio-thermo-gauge2"].value = bioVals[5]
            bioGaugeInfo["bio-ph-gauge2"].value = bioVals[6]
            bioGaugeInfo["bio-oxygen-gauge2"].value = bioVals[7]
            bioGaugeInfo["bio-turbidity-gauge2"].value = bioVals[8]
            bioGaugeInfo["bio-pro-gauge1"].value = bioVals[9]
            bioGaugeInfo["bio-pro-gauge2"].value = bioVals[10]

            updateBioPhGauge("bio-ph-gauge1")
            updateBioPhGauge("bio-ph-gauge2")
            updateBioProGauge("bio-pro-gauge1")
            updateBioProGauge("bio-pro-gauge2")

            let ids = Object.keys(bioGaugeInfo)
            ids.forEach((id) => {
                Plotly.update(id, {
                    value: bioVals[ids.indexOf(id)+1], 
                    title: bioGaugeInfo[id].title, 
                    'gauge.bar.color': "blue",
                })
            })

            //plot values
            if(logging) {
                bUpdateCounter += 1
                if(bUpdateCounter >= 2) {
                    bUpdateCounter = 0
                    Plotly.extendTraces('bio-thermo-graph', {
                        x: [[bioVals[0]],[bioVals[0]]],
                        y: [[bioVals[1]],[bioVals[5]]]
                    }, [0, 1])
                    Plotly.extendTraces('bio-ph-graph', {
                        x: [[bioVals[0]],[bioVals[0]]],
                        y: [[bioVals[2]],[bioVals[6]]]
                    }, [0, 1])
                    Plotly.extendTraces('bio-oxygen-graph', {
                        x: [[bioVals[0]],[bioVals[0]]],
                        y: [[bioVals[3]],[bioVals[7]]]
                    }, [0, 1])
                    Plotly.extendTraces('bio-turbidity-graph', {
                        x: [[bioVals[0]],[bioVals[0]]],
                        y: [[bioVals[4]],[bioVals[8]]]
                    }, [0, 1])
                    Plotly.extendTraces('bio-pro-graph', {
                        x: [[bioVals[0]],[bioVals[0]]],
                        y: [[bioVals[9]],[bioVals[10]]]
                    }, [0, 1])
                }
            }
        }, false)

        source.addEventListener('chemreactor-readings', function(e) {
            var chemVals = e.data.split(',')

            chemGaugeInfo["chem-thermo-gauge1"].value = chemVals[1]
            chemGaugeInfo["chem-thermo-gauge2"].value = chemVals[2]

            let ids = Object.keys(chemGaugeInfo)
            ids.forEach((id) => {
                chemGaugeInfo[id].value = chemVals[ids.indexOf(id)+1]
                updateChemGauge(id)
            })
            //Plotly.restyle('chem-thermo-gauge1', {value: chemVals[1], title: 'Thermocouple 1', 'gauge.bar.color': "blue"})

            if(logging) {
                cUpdateCounter += 1
                if(cUpdateCounter >= 2) {
                    cUpdateCounter = 0
                    Plotly.extendTraces('chem-thermo-graph', {
                        x: [[chemVals[0]],[chemVals[0]]],
                        y: [[chemVals[1]], [chemVals[2]]]
                    }, [0, 1])
                }
            }
        }, false)
    }

    var logging = false;
    function setRunning() {
        logging = !logging
        if(logging) {
            document.getElementById("run").textContent = "Logging Data..."
            sendPOST("logging", "logging")
        } else {
            document.getElementById("run").textContent = "Start Logging Data"
            sendPOST("not logging", "not-logging")
        }
    }

    function setESTOP() {
        if(document.getElementById("estop").textContent == 'E-STOP OFF') {
            document.getElementById("estop").textContent = 'E-STOP ON'
            sendPOST("estop on", "estop-on")
        } else {
            document.getElementById("estop").textContent = 'E-STOP OFF'
            sendPOST("estop off", "estop-off")
        }
    }

    function sendPOST(data, action) {
        var url = window.location.href + action;
        fetch(url, {
            method: "POST",
            headers: {
            'Content-Type': 'text/plain',
            },
            body: String(data),
        })
        .then(response => response.text()) // Get the response as text
        .then(textData => {
            // Handle the data from the response
            //console.log('Response Data:', textData);
        })
    }

    function setTracking(buttonID, inputID, graphID) {
        if(document.getElementById(buttonID).textContent == 'Track Data') {
            document.getElementById(buttonID).textContent = 'Tracking Data...'
            trackData(document.getElementById(inputID).value, graphID)
        } else {
            document.getElementById(buttonID).textContent = 'Track Data'
        }
    }
    function trackData(amount, graphID) {
        let lastIndex = pyrolysis_traces[0].x.length-1
        let currentDate = new Date(pyrolysis_traces[0].x[lastIndex])
        Plotly.relayout(graphID, {"xaxis.range": [currentDate - amount*1000, currentDate]})
    }

    function setGaugeValue(amount, gaugeID) {
        Plotly.update(gaugeID, {value: amount > 100 ? 100 : amount, title: motorGaugeInfo[gaugeID].title})
    }

    function updatePyrolysisGauge(gaugeID) {
        let setpoint = parseFloat(pyrolysisGaugeInfo[gaugeID].setpoint)
        let value = parseFloat(pyrolysisGaugeInfo[gaugeID].value)
        function pickColor() {
            if      (value < setpoint-50)   {return "yellow"}
            else if (value > setpoint+50)   {return "red"}
            else                            {return "green"}
        }
        let new_thermo_gauge = {
            domain: { x: [0, 1], y: [0, 1] },
            value: value,
            title: { text: pyrolysisGaugeInfo[gaugeID].title },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [0, setpoint*2] },
                bar: { color: pickColor() },
                steps: [
                    { range: [0, setpoint*2], color: "#dddddd" },
                    { range: [setpoint*(1-0.275), setpoint*(1-0.225)], color: "yellow" },
                    { range: [setpoint-(setpoint/40), setpoint+(setpoint/40)], color: "green" },
                    { range: [setpoint*(1+0.275), setpoint*(1+0.225)], color: "red" }
                ],
            }
        };
        Plotly.restyle(gaugeID, new_thermo_gauge)
    }

    function updateChemGauge(gaugeID) {
        let setpoint = parseFloat(chemGaugeInfo[gaugeID].setpoint)
        let value = parseFloat(chemGaugeInfo[gaugeID].value)
        function pickColor() {
            if      (value < setpoint-50)   {return "yellow"}
            else if (value > setpoint+50)   {return "red"}
            else                            {return "green"}
        }
        let new_thermo_gauge = {
            domain: { x: [0, 1], y: [0, 1] },
            value: value,
            title: { text: chemGaugeInfo[gaugeID].title },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [0, setpoint*2] },
                bar: { color: pickColor() },
                steps: [
                    { range: [0, setpoint*2], color: "#dddddd" },
                    { range: [setpoint*(1-0.275), setpoint*(1-0.225)], color: "yellow" },
                    { range: [setpoint-(setpoint/40), setpoint+(setpoint/40)], color: "green" },
                    { range: [setpoint*(1+0.275), setpoint*(1+0.225)], color: "red" }
                ],
            }
        };
        Plotly.restyle(gaugeID, new_thermo_gauge)
    }

    function updateBioPhGauge(gaugeID) {
        let setpoint = parseFloat(bioGaugeInfo[gaugeID].setpoint)
        let value = parseFloat(bioGaugeInfo[gaugeID].value)
        
        let new_ph_gauge = {
            domain: { x: [0, 1], y: [0, 1] },
            value: value,
            title: { text: bioGaugeInfo[gaugeID].title },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [null, 14] },
                bar: { color: "blue" },
                steps: [
                    { range: [0, 14], color: "#dddddd" },
                ],
                threshold: {
                    line: { color: "red", width: 4 },
                    thickness: 0.75,
                    value: setpoint,
                }
            }
        }
        Plotly.restyle(gaugeID, new_ph_gauge)
    }

    function updateBioProGauge(gaugeID) {
        let setpoint = parseFloat(bioGaugeInfo[gaugeID].setpoint)
        let value = parseFloat(bioGaugeInfo[gaugeID].value)

        function pickColor() {
            if      (value < setpoint-50)   {return "yellow"}
            else if (value > setpoint+50)   {return "red"}
            else                            {return "green"}
        }
        
        let new_thermo_gauge = {
            domain: { x: [0, 1], y: [0, 1] },
            value: value,
            title: { text: bioGaugeInfo[gaugeID].title },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: { range: [0, setpoint*2] },
                bar: { color: pickColor() },
                steps: [
                    { range: [0, setpoint*2], color: "#dddddd" },
                    { range: [setpoint*(1-0.275), setpoint*(1-0.225)], color: "yellow" },
                    { range: [setpoint-(setpoint/40), setpoint+(setpoint/40)], color: "green" },
                    { range: [setpoint*(1+0.275), setpoint*(1+0.225)], color: "red" }
                ],
            }
        }
        Plotly.restyle(gaugeID, new_thermo_gauge)
    }

    function downloadCSVFile(url, filename) {
        // Create a hidden anchor element
        const anchor = document.createElement('a');
        anchor.style.display = 'none';
        document.body.appendChild(anchor);

        // Set the href attribute of the anchor element to the CSV file URL
        anchor.href = url;

        // Set the download attribute to specify the filename
        anchor.setAttribute('download', filename);

        // Trigger a click event on the anchor element to start the download
        anchor.click();

        // Clean up by removing the anchor element
        document.body.removeChild(anchor);
    }

    function clearPyrolysis() {
        sendPOST('delete-pyrolysis', 'delete-pyrolysis')

        for(let x = 0; x < pyrolysis_traces.length; x++) {
            pyrolysis_traces[x].x = []    //data[0] pushes time to the x axis
            pyrolysis_traces[x].y = []   //data[x+1] to avoid pushing the date and time
        }
        Plotly.newPlot('pyrolysis-thermo-graph', pyrolysis_traces, thermocouple_layout, {scrollZoom: true});
    }

    function clearBioreactor() {
        sendPOST('delete-bioreactor', 'delete-bioreactor')

        for(let x = 0; x < 2; x++) {
            bio_thermo_traces[x].x = []
            bio_ph_traces[x].x = []  
            bio_oxygen_traces[x].x = []
            bio_turbidity_traces[x].x = []
            bio_pro_traces[x].x = []

            bio_thermo_traces[x].y = []
            bio_ph_traces[x].y = []
            bio_oxygen_traces[x].y = []
            bio_turbidity_traces[x].y = []
            bio_pro_traces[x].y = []
        }
        Plotly.newPlot('bio-thermo-graph', bio_thermo_traces, bio_thermo_layout, {scrollZoom: true});                    
        Plotly.newPlot('bio-ph-graph', bio_ph_traces, pH_layout, {scrollZoom: true});
        Plotly.newPlot('bio-oxygen-graph', bio_oxygen_traces, oxygen_layout, {scrollZoom: true});
        Plotly.newPlot('bio-turbidity-graph', bio_turbidity_traces, turbidity_layout, {scrollZoom: true});
        Plotly.newPlot('bio-pro-graph', bio_pro_traces, pro_layout, {scrollZoom: true});
    }

    function clearChemreactor() {
        sendPOST('delete-chemreactor', 'delete-chemreactor')
        for(let x = 0; x < 2; x++) {
            chem_thermo_traces[x].x = []
            chem_thermo_traces[x].y = []
        }
        Plotly.newPlot('chem-thermo-graph', chem_thermo_traces, chem_thermo_layout, {scrollZoom: true});
    }