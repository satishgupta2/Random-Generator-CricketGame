let Scorestr = localStorage.getItem('Score');
        let Score;
        resetScore(Scorestr);
        
        function resetScore(Scorestr){

             Score = Scorestr ? JSON.parse(Scorestr) :{
                win: 0,
                loss: 0,
                tie: 0,
            };
        

        Score.displayscore = function () {
            return `Score Win:${Score.win},Loss:${Score.loss}, tie ${Score.tie}`;
        };

        showResult();
        }


        function generateComputerChoice() {
            let randomNumber = Math.random() * 3;
            if (randomNumber > 0 && randomNumber <= 1) {
                return 'Bat';
            } else if (randomNumber > 1 && randomNumber <= 2) {
                return 'Ball';
            }
            else if (randomNumber > 2 && randomNumber <= 3) {
                return 'stump';
            }
        }

        function getResult(userMove, computerMove) {
            if (userMove === 'Bat') {
                if (computerMove === 'Ball') {
                    Score.win++;
                    return 'User won.';
                }
                else if (computerMove === 'Bat') {
                    Score.tie++;
                    return `It's a tie`;
                } else if (computerMove === 'stump') {
                    Score.loss++;
                    return 'Computer Won';
                }

            } else if (userMove === 'Ball') {
                if (computerMove === 'Ball') {
                    Score.tie++;
                    return `It's a tie`;
                }
                else if (computerMove === 'Bat') {
                    Score.loss++;
                    return 'Computer Won';
                } else if (computerMove === 'stump') {
                    Score.win++;
                    return 'User won.';
                }
            } else {

                if (computerMove === 'Ball') {
                    Score.loss++;
                    return 'Computer Won';
                }
                else if (computerMove === 'Bat') {
                    Score.win++;
                    return 'User won.';
                } else if (computerMove === 'stump') {
                    Score.tie++;
                    return `It's a tie`;
                }
            }
        }


        function showResult(userMove, computerMove, result) {
            localStorage.setItem('Score', JSON.stringify(Score));
            document.querySelector('#user-move').innerText =
            userMove !==undefined? `You have chosen  ${userMove}`: '';
            document.querySelector('#computer-move').innerText =
            computerMove !==undefined ?`Computer Choice is ${computerMove}`:'';
            document.querySelector('#result').innerText = result !==undefined ? result : '';
            document.querySelector('#score').innerText = Score.displayscore();
            
        }