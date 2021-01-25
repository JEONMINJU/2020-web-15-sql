function onSave(f) {
	if(f.name.value.trim() == ""){
		alert("도서 제목을 입력하세요!!!!!!");
		f.name.focus();
		return false;
	}
	return true;
}