var gui

function setup() {
  createCanvas(windowWidth,windowHeight)
  
  gui=new Gui(10,10,'GUI EXAMPLE')
  gui.createSlider('slider1',1,20,10,1)
  gui.createCheckbox('checkBox1',true)
  gui.createInput('input1','Hello !')
  
  gui.createTitle('Second Category',10)
  gui.createColorPicker('colorPicker1',color(255,0,0))
  gui.createSelect('select1',['one','two','three','four'],'one')
  
  print(gui.elements)
}

function draw() {
  background(51)
  gui.run()
}