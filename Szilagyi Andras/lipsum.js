function generateWords(num){
	var lipsum="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis nisi vitae ligula bibendum molestie. Nullam vehicula egestas lectus, a commodo est ultricies faucibus. Donec a urna gravida, aliquam leo eu, ultrices elit. Donec euismod posuere sem, eget semper tortor varius molestie";
	var words=lipsum.split("  ");
	var word="";
	
	for(var i=0;i<num;i++){
		var rand=parseInt(Math.random() *words.length);
		word+= " "+words(rand);
	}
	
	return word;
}self.onmessage=function(event){
	var word=generateWords(event.data.num);
	self.postMessage({lipsum:word});
	
	