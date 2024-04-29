// Name: Jasmine Javier
// Assignment 0

 function main() {
    // Retrieve <canvas> element
    var canvas = document.getElementById('asg0');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

  // Get the rendering context for 2DCG
    var ctx = canvas.getContext('2d');

  // Draw a black rectangle
  ctx.fillStyle = 'black'; // Set color to black
  ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color
 }

 function drawVector(v, color){

    var canvas = document.getElementById('asg0');
    var ctx = canvas.getContext('2d');

    ctx.strokeStyle = color //Set color of vector
    ctx.beginPath();
    ctx.moveTo(canvas.width/2, canvas.height/2);
    var canX = v.elements[0]*20;
    var canY = v.elements[1]*20;
    ctx.lineTo(canvas.width/2 + canX, canvas.height/2 - canY);
    ctx.stroke();

 }

 function handleDrawEvent(){

    var canvas = document.getElementById('asg0');
    var ctx = canvas.getContext('2d');

    var x1 = document.getElementById('xpoint1').value;
    var y1 = document.getElementById('ypoint1').value;
    var x2 = document.getElementById('xpoint2').value;
    var y2 = document.getElementById('ypoint2').value;

    // Clear the canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //Create black background again
    ctx.fillStyle = 'black'; // Set color to black
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color

    var v1 = new Vector3([x1, y1, 0]);
    drawVector(v1, "red");
    var v2 = new Vector3([x2, y2, 0]);
    drawVector(v2, "blue");

 }

 function angleBetween(v1,v2){
    var mag1 = v1.magnitude();
    var mag2 = v2.magnitude();
    var dot = Vector3.dot(v1, v2);

    if (mag1 != 0 && mag2 != 0){
      var alpha = Math.acos(dot/(mag1*mag2));
      alpha *= 180/Math.PI;

      return alpha;
    }
 }

 function areaTriangle(v1,v2){
    var vCross = Vector3.cross(v1,v2);
    var pArea = vCross.magnitude();

    return pArea/2;
 }

 function handleDrawOperationEvent() {
    var canvas = document.getElementById('asg0');
    var ctx = canvas.getContext('2d');

    var x1 = document.getElementById('xpoint1').value;
    var y1 = document.getElementById('ypoint1').value;
    var x2 = document.getElementById('xpoint2').value;
    var y2 = document.getElementById('ypoint2').value;

    // Clear the canvas
    ctx.clearRect(0,0, canvas.width, canvas.height);

    //Create black background again
    ctx.fillStyle = 'black'; // Set color to black
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color

    var v1 = new Vector3([x1, y1, 0.0]);
    drawVector(v1, "red");
    var v2 = new Vector3([x2, y2, 0.0]);
    drawVector(v2, "blue");

    var opVal = document.getElementById('operator').value;
    var v3;
    var v4;
    
    if (opVal == "Add"){   //Add operation
      v3 = v1.add(v2);
      drawVector(v3, "green");
    } else if (opVal == "Sub"){  //Subtract operation
      v3 = v1.sub(v2)
      drawVector(v3, "green");
    } else if (opVal == "Multi"){   //Multiply operation
      var scal = document.getElementById('scalar').value;
      v3 = v1.mul(scal);
      drawVector(v3, "green");
      v4 = v2.mul(scal);
      drawVector(v4, "green");
    } else if (opVal == "Div"){   //Division operation
      var scal = document.getElementById('scalar').value;
      v3 = v1.div(scal);
      drawVector(v3, "green");
      v4 = v2.div(scal);
      drawVector(v4, "green");
    } else if (opVal == "Mag"){  //Magnitude operation
      console.log("V1 Magnitude: " + v1.magnitude());
      console.log("V2 Magnitude: " + v2.magnitude());
    } else if (opVal == "Norm"){
      v3 = v1.normalize();
      drawVector(v3, "green");
      v4 = v2.normalize();
      drawVector(v4, "green");
    } else if (opVal == "Angle"){   //Angle operation
      console.log("Angle: " + angleBetween(v1,v2));
    } else if (opVal == "Area"){   //Area of Triangle operation
      console.log("Area of Triangle: " + areaTriangle(v1,v2));
    } 
    
    //if (opVal == "Norm" || opVal == "Multi" || opVal == "Div"){
    //  drawVector(v3, "green");
    //  drawVector(v4, "green");
    //} else (opVal == "Area" || opVal == "Angle" || opVal == "Mag");
    //  return;
    }
