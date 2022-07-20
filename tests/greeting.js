const test = () => {
    try {
        let actual = document.getElementById("greeting").innerText;
        let expected = "hello hero";
        if (actual !== expected) {
            alert(`failed, expected <${expected}> but was <${actual}>`)
        }
    } catch (e) {
        alert(e.message)
    }
}