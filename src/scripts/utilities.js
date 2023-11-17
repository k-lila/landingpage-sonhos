export function classHandler(removeAdd, id, classes) {
    if (removeAdd) {
        document.getElementById(id).classList.add(classes)
    } else {
        document.getElementById(id).classList.remove(classes)
    }
}