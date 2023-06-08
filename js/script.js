var text = "Hello World!";

document.getElementById("kirim").addEventListener("click", function () {
  console.log(text);
});

document.getElementsByName("input[name='nama']").addEventListener("input"),
  function () {
    console.log("sudah bisa diinput");
  };

function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  }

  var datetime = new Date();
  console.log(datetime);
  document.getElementById("time").textContent = datetime;

  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
  return false;
}
