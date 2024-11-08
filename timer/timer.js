let hours = 0, minutes = 0, seconds = 0;
        let timerInterval = null;

        function updateTimerDisplay() {
            const formattedTime = 
                String(hours).padStart(2, '0') + ":" +
                String(minutes).padStart(2, '0') + ":" +
                String(seconds).padStart(2, '0');
            document.getElementById("timer").innerText = formattedTime;
        }

        function startTimer() {
            // 隐藏所有按钮
            document.getElementById("buttons").style.display = "none";
            
            // 防止重复启动计时器
            if (timerInterval) return;

            timerInterval = setInterval(() => {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                    if (minutes === 60) {
                        minutes = 0;
                        hours++;
                    }
                }
                updateTimerDisplay();
            }, 1000);
        }

        function stopTimer() {
            clearInterval(timerInterval);
            timerInterval = null;

            // 显示按钮
            showButtons();
        }

        function resetTimer() {
            stopTimer();
            hours = 0;
            minutes = 0;
            seconds = 0;
            updateTimerDisplay();

            // 显示按钮
            showButtons();
        }

        // 点击计时器区域时显示按钮
        function showButtons() {
            document.getElementById("buttons").style.display = "block";
        }