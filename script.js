<script>
    const display = document.getElementById('display');
    let currentInput = '';

    function appendNumber(number) {
        currentInput += number;
    display.value = currentInput;
    }

    function
    appendDecimal() {
        if (!currentInput.includes('.')) {
        currentInput += '.';
    display.value = currentInput;
        
    

    function
    calculate(operator) {
        if (currentInput !== '') {
            if (operator === '%' && currentInput.includes('%')) {
        currentInput = (currentInput.slice(0, -1) / 100).toString();
    display.value = currentInput;
            } else {
        currentInput += operator;
    display.value = currentInput;
            }
        }
    }

    function clearDisplay() {
        currentInput = '';
    display.value = '';
    }

    function deleteChar() {
        currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
    }

    function evaluate() {
        try {
        currentInput = eval(currentInput).toString();
    display.value = currentInput;
        } catch (error) {
        display.value = 'Error';
        }
    }
</script>