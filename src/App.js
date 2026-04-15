import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [formClient, setFormClient] = useState("")
  const [formDevice, setFormDevice] = useState("")
  const [formIssue, setFormIssue] = useState("")
  const [formStatus, setFormStatus] = useState("")
  const [formPriority, setFormPriority] = useState("")
  const [formError, setFormError] = useState("")

  const [submissions, setSubmissions] = useState([])
  const [confetti, setConfetti] = useState([])
  const [particles, setParticles] = useState([])
  const [achievement, setAchievement] = useState(null)
  const [discoMode, setDiscoMode] = useState(false)
  const [lastParticleTime, setLastParticleTime] = useState(0)
  const [rizzPoints, setRizzPoints] = useState(0)
  const [sigmaMode, setSigmaMode] = useState(false)
  const [brainrotPhrase, setBrainrotPhrase] = useState(null)
  const [skibidiMode, setSkibidiMode] = useState(false)
  const [gooningSession, setGooningSession] = useState(false)
  const [sessionTime, setSessionTime] = useState(0)
  const [gigachadFlying, setGigachadFlying] = useState(false)
  const [clickCombo, setClickCombo] = useState(0)
  const [clickEffects, setClickEffects] = useState([])
  const [shakeIntensity, setShakeIntensity] = useState(0)
  const [megaComboActive, setMegaComboActive] = useState(false)
  const [screenFlash, setScreenFlash] = useState(false)
  const [gooningHistory, setGooningHistory] = useState([])
  const [showHistory, setShowHistory] = useState(false)
  const [normalMode, setNormalMode] = useState(true)

  const [statusToFilterBy, setStatusToFilterBy] = useState("")
  
  // Ładowanie zgłoszeń z pliku JSON
  useEffect(() => {
    fetch('/zgloszenia.json')
      .then(response => response.json())
      .then(data => setSubmissions(data))
      .catch(error => console.error('Błąd ładowania zgłoszeń:', error))
  }, [])
  
  // Brainrot GIFy
  const brainrotGifs = [
    'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif', // Dancing cat
    'https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif', // Spinning seal
    'https://media.giphy.com/media/YJ5OlVLZ2QNl6/giphy.gif', // Dancing banana
    'https://media.giphy.com/media/lgcUUCXgC8mEo/giphy.gif', // Nyan cat
    'https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif', // Dancing dog
    'https://media.giphy.com/media/CAYVZA5NRb529kKQUc/giphy.gif', // Gigachad
    'https://media.giphy.com/media/kBZBlLVlfECvOQAVno/giphy.gif', // Stonks
    'https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif', // Rainbow vomit
    'https://media.giphy.com/media/3o7aCWJavAgtBzLOI8/giphy.gif', // Party parrot
    'https://media.giphy.com/media/BpGWitbFZflfSUYuZ9/giphy.gif' // Vibing cat
  ];
  
  // Brainrot phrases (Gen Z/Alpha slang)
  const brainrotPhrases = [
    "SKIBIDI TOILET 🚽",
    "ONLY IN OHIO 💀",
    "SIGMA GRINDSET 😎",
    "GYATT 🍑",
    "RIZZ +1000 📈",
    "FAN UM PAULO 🇮🇹",
    "MEWING STREAK 🤫🧏",
    "GRIDDY TIME 🕺",
    "FANUM TAX 💸",
    "L + RATIO 📉",
    "BUSSIN FR FR 🔥",
    "NO CAP 🧢",
    "SHEEEESH 😤",
    "IT'S GIVING ✨",
    "SLAY QUEEN 💅",
    "CAUGHT IN 4K 📸",
    "TOUCH GRASS ❌",
    "BASED GIGACHAD 💪",
    "GOONING SESSION 🤤",
    "EDGING MAXING 💯",
    "BRAIN ROT ACTIVATED 🧠",
    "YOU ENTERED THE HOLY GOONSPOT 🧠"

  ];
  
  // Gooning Session Timer
  useEffect(() => {
    let interval;
    if (gooningSession) {
      interval = setInterval(() => {
        setSessionTime(prev => prev + 1);
        // Earn RIZZ points every second (increased during gooning)
        setRizzPoints(prev => prev + 10);
      }, 1000);
    } else {
      // Save session to history when ending
      if (sessionTime > 0) {
        const sessionData = {
          id: Date.now(),
          duration: sessionTime,
          rizzEarned: sessionTime * 10,
          timestamp: new Date().toLocaleString('pl-PL'),
          combo: clickCombo
        };
        setGooningHistory(prev => [sessionData, ...prev].slice(0, 20)); // Keep last 20 sessions
        showAchievement(`🎯 SESSION COMPLETED! Duration: ${Math.floor(sessionTime/60)}:${(sessionTime%60).toString().padStart(2,'0')} | +${sessionTime * 10} RIZZ`);
      }
      setSessionTime(0);
    }
    return () => clearInterval(interval);
  }, [gooningSession, sessionTime, clickCombo]);

  // Click Combo Reset
  useEffect(() => {
    if (clickCombo > 0) {
      const timeout = setTimeout(() => {
        setClickCombo(0);
      }, 2000); // Reset after 2 seconds of no clicks
      return () => clearTimeout(timeout);
    }
  }, [clickCombo]);

  // Shake Intensity Reset
  useEffect(() => {
    if (shakeIntensity > 0) {
      const timeout = setTimeout(() => {
        setShakeIntensity(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [shakeIntensity]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'd' || e.key === 'D') {
        setDiscoMode(prev => !prev);
        showBrainrotPhrase();
      } else if (e.key === 's' || e.key === 'S') {
        setSigmaMode(prev => !prev);
        setRizzPoints(prev => prev + 50);
      } else if (e.key === 'k' || e.key === 'K') {
        setSkibidiMode(prev => !prev);
        createConfetti();
      } else if (e.key === 'g' || e.key === 'G') {
        setGooningSession(prev => !prev);
        setRizzPoints(prev => prev + 100);
      } else if (e.key === ' ') {
        e.preventDefault();
        // Spacebar - mega combo boost
        setClickCombo(prev => prev + 5);
        setRizzPoints(prev => prev + 50);
        createConfetti();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Interactive Click Handler
  const handleInteractiveClick = (e) => {
    if (!gooningSession && !discoMode && !skibidiMode && !sigmaMode) return;
    
    const x = e.clientX;
    const y = e.clientY;
    
    // Increase combo
    const newCombo = clickCombo + 1;
    setClickCombo(newCombo);
    
    // Add RIZZ points based on combo
    const rizzBonus = newCombo * 10;
    setRizzPoints(prev => prev + rizzBonus);
    
    // Create click effect
    const clickEmojis = ['💥', '🔥', '⚡', '💯', '👑', '💪', '😎', '🚽', '💀', '🗿', '🤤', '💦'];
    const newEffect = {
      id: Date.now(),
      x: x,
      y: y,
      emoji: clickEmojis[Math.floor(Math.random() * clickEmojis.length)],
      size: 30 + (newCombo * 5),
      rizzBonus: rizzBonus
    };
    
    setClickEffects(prev => [...prev, newEffect]);
    setTimeout(() => {
      setClickEffects(prev => prev.filter(e => e.id !== newEffect.id));
    }, 1000);
    
    // Add shake during gooning session
    if (gooningSession) {
      setShakeIntensity(Math.min(newCombo * 2, 20));
    }
    
    // Random brainrot phrase on high combos
    if (newCombo % 10 === 0) {
      showBrainrotPhrase();
    }
    
    // Confetti on mega combos
    if (newCombo % 25 === 0) {
      createConfetti();
      setMegaComboActive(true);
      setScreenFlash(true);
      setTimeout(() => setScreenFlash(false), 200);
      setTimeout(() => setMegaComboActive(false), 3000);
    }
    
    // Super mega combo at 50
    if (newCombo === 50) {
      setDiscoMode(true);
      setSkibidiMode(true);
      setSigmaMode(true);
      showAchievement('🏆 MEGA ULTRA COMBO! ALL MODES ACTIVATED! 🏆');
      setScreenFlash(true);
      setTimeout(() => setScreenFlash(false), 100);
      setTimeout(() => setScreenFlash(true), 200);
      setTimeout(() => setScreenFlash(false), 300);
      createConfetti();
      setTimeout(() => createConfetti(), 500);
      setTimeout(() => createConfetti(), 1000);
    }
  };

  // GIGACHAD Flying Effect
  useEffect(() => {
    let timeoutId;
    
    const scheduleNextGigachad = () => {
      // Random interval between 20-60 seconds
      const nextTime = 20000 + Math.random() * 40000;
      timeoutId = setTimeout(() => {
        setGigachadFlying(true);
        setRizzPoints(prev => prev + 500); // +500 RIZZ for gigachad appearance!
        const randomPhrase = brainrotPhrases[Math.floor(Math.random() * brainrotPhrases.length)];
        setBrainrotPhrase(randomPhrase);
        setTimeout(() => setBrainrotPhrase(null), 2000);
        
        setTimeout(() => {
          setGigachadFlying(false);
          scheduleNextGigachad(); // Schedule next one
        }, 5000);
      }, nextTime);
    };
    
    // First gigachad after 10 seconds
    const firstTimeout = setTimeout(() => {
      setGigachadFlying(true);
      setRizzPoints(prev => prev + 500); // Bonus RIZZ for gigachad!
      setTimeout(() => {
        setGigachadFlying(false);
        scheduleNextGigachad();
      }, 5000);
    }, 10000);
    
    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(timeoutId);
    };
  }, [brainrotPhrases]);
  function SubmissionsList(props) {
    let list = submissions;
    if (statusToFilterBy !== "") {
      list = submissions.filter((submission) => submission.status === statusToFilterBy);
    }

    if (list.length == 0) {
      return <p className={normalMode ? "text-muted" : "empty-message"}>Brak zgłoszeń do wyświetlenia</p>;
    }
    
    if (normalMode) {
      return (
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Klient</th>
              <th>Urządzenie</th>
              <th>Usterka</th>
              <th>Status</th>
              <th>Priorytet</th>
            </tr>
          </thead>
          <tbody>
            {list.map((submission) => (
              <tr key={submission.id}>
                <td>{submission.id}</td>
                <td>{submission.klient}</td>
                <td>{submission.urzadzenie}</td>
                <td>{submission.usterka}</td>
                <td>{submission.status}</td>
                <td>{submission.priorytet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    
    return list.map((submission) => (
      <div key={submission.id} className="submission-item">
        <p className="mb-0"><strong>Klient:</strong> {submission.klient} | <strong>Urządzenie:</strong> {submission.urzadzenie} | <strong>Usterka:</strong> {submission.usterka} | <strong>Status:</strong> {submission.status} | <strong>Priorytet:</strong> {submission.priorytet}</p>
      </div>
    ));
  }
  function AddNewSubmission(){
    if (!formClient || !formDevice || !formIssue || !formStatus || !formPriority) {
      setFormError("Wypełnij wszystkie pola formularza!");
      return;
    }
    
    setFormError("");
    const maxId = submissions.length > 0 
      ? Math.max(...submissions.map(s => s.id)) 
      : 0;
    const newSubmissions = [
      ...submissions, {
        id: maxId + 1,
        klient:formClient,
        urzadzenie:formDevice,
        usterka:formIssue,
        status:formStatus,
        priorytet:formPriority
      }
    ];
    setSubmissions(newSubmissions);
    
    // Czyszczenie formularza
    setFormClient("");
    setFormDevice("");
    setFormIssue("");
    setFormStatus("");
    setFormPriority("");
    
    // RIZZ POINTS +100
    setRizzPoints(prev => prev + 100);
    
    // Random brainrot phrase
    showBrainrotPhrase();
    
    // CONFETTI!
    createConfetti();
    
    // Achievements
    const count = newSubmissions.length;
    if (count === 1) showAchievement("🎉 Pierwsze zgłoszenie! Bussin fr fr!");
    if (count === 5) showAchievement("🔥 5 zgłoszeń! Sigma grindset!");
    if (count === 10) showAchievement("🏆 10 zgłoszeń! Gigachad status!");
    if (count === 20) showAchievement("💎 20 zgłoszeń! ONLY IN OHIO!");
    if (count === 50) showAchievement("👑 50 zgłoszeń! SKIBIDI TOILET MAXING!");
  }
  
  function showBrainrotPhrase() {
    const phrase = brainrotPhrases[Math.floor(Math.random() * brainrotPhrases.length)];
    setBrainrotPhrase(phrase);
    setTimeout(() => setBrainrotPhrase(null), 2000);
  }
  
  function createConfetti() {
    const confettiEmojis = ['🎉', '🎊', '✨', '🌟', '💫', '⭐', '🎈', '🎆', '🎇', '💥', '🚽', '💀', '🗿', '😎', '💪', '🔥', '💯', '👑'];
    const newConfetti = Array.from({length: 30}, (_, i) => ({
      id: Date.now() + i,
      emoji: confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2
    }));
    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 4000);
  }
  
  function showAchievement(message) {
    setAchievement(message);
    setTimeout(() => setAchievement(null), 4000);
  }
  
  function createParticles(e) {
    // Throttling - max 1 efekt na 200ms
    const now = Date.now();
    if (now - lastParticleTime < 200) return;
    setLastParticleTime(now);
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const particleEmojis = ['💥', '✨', '⚡', '💫', '🌟', '🚽', '💀', '🗿', '😎', '💪'];
    const newParticles = Array.from({length: 8}, (_, i) => ({
      id: Date.now() + i,
      emoji: particleEmojis[Math.floor(Math.random() * particleEmojis.length)],
      x: x,
      y: y,
      angle: (Math.PI * 2 * i) / 8
    }));
    setParticles([...particles, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);
  }
  function filterList(e){
    setStatusToFilterBy(e.target.value);
  }
  function SubmissionCounter(props) {
    const count = submissions.filter((submission) => submission.status === props.status).length;
    const displayName = props.status.charAt(0).toUpperCase() + props.status.slice(1);
    return <p className={normalMode ? "mb-1" : "summary-item"}>{displayName}: {count}</p>
  }
  
  // Generowanie losowych gwiazdek (zmniejszona liczba dla wydajności)
  const starEmojis = ['⭐', '✨', '🌟', '💫', '⚡', '🚽', '💀', '🗿', '😎', '💪', '🔥'];
  const stars = Array.from({length: 20}, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    size: 15 + Math.random() * 25,
    emoji: starEmojis[Math.floor(Math.random() * starEmojis.length)]
  }));

  // Dodaj klasę do body w zależności od trybu
  useEffect(() => {
    if (normalMode) {
      document.body.classList.add('normal-mode-body');
      document.body.classList.remove('dopamine-mode-body');
    } else {
      document.body.classList.remove('normal-mode-body');
      document.body.classList.add('dopamine-mode-body');
    }
  }, [normalMode]);

  return (
    <>
      {/* Mode Toggle Button */}
      <button 
        className={normalMode ? "btn btn-primary position-fixed dopamine-toggle-btn" : "mode-toggle-btn"}
        style={normalMode ? {bottom: '10px', right: '10px', zIndex: 1000, opacity: 0, transition: 'opacity 0.3s'} : {}}
        onMouseEnter={(e) => { if (normalMode) e.target.style.opacity = '1'; }}
        onMouseLeave={(e) => { if (normalMode) e.target.style.opacity = '0'; }}
        onClick={() => {
          setNormalMode(!normalMode);
          if (!normalMode) {
            // Wyłącz wszystkie tryby gdy wchodzisz w normal mode
            setDiscoMode(false);
            setSigmaMode(false);
            setSkibidiMode(false);
            setGooningSession(false);
          } else {
            showBrainrotPhrase();
          }
        }}
      >
        {normalMode ? '🎨 DOPAMINE MODE 🌟' : '📋 NORMAL MODE 📋'}
      </button>

      {/* Screen Flash Effect */}
      {!normalMode && screenFlash && <div className="screen-flash"></div>}

      {/* Fale w tle */}
      {!normalMode && <div className="ocean">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>}

      {/* Brainrot GIF w rogu */}
      {!normalMode && <div 
        className="brainrot-gif-container"
        onClick={(e) => {
          e.stopPropagation();
          setRizzPoints(prev => prev + 100);
          createConfetti();
          showBrainrotPhrase();
        }}
        style={{cursor: 'pointer'}}
      >
        <img 
          src={brainrotGifs[submissions.length % brainrotGifs.length]} 
          alt="brainrot" 
          className="brainrot-gif"
        />
      </div>}

      {/* FLYING GIGACHAD */}
      {!normalMode && gigachadFlying && (
        <div className="gigachad-flying">
          <img 
            src="https://media.giphy.com/media/CAYVZA5NRb529kKQUc/giphy.gif" 
            alt="GIGACHAD" 
          />
          <div className="gigachad-text">GIGACHAD APPROACHING 💪😎</div>
        </div>
      )}

      {/* Confetti */}
      {!normalMode && confetti.map(conf => (
        <div 
          key={conf.id} 
          className="confetti"
          style={{
            left: `${conf.left}%`,
            animationDelay: `${conf.delay}s`,
            animationDuration: `${conf.duration}s`
          }}
        >{conf.emoji}</div>
      ))}

      {/* Particles */}
      {!normalMode && particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            '--angle': `${particle.angle}rad`
          }}
        >{particle.emoji}</div>
      ))}

      {/* Achievement Notification */}
      {!normalMode && achievement && (
        <div className="achievement">
          {achievement}
        </div>
      )}

      {/* Brainrot Phrase */}
      {!normalMode && brainrotPhrase && (
        <div className="brainrot-phrase">
          {brainrotPhrase}
        </div>
      )}

      {/* Click Effects */}
      {!normalMode && clickEffects.map(effect => (
        <div
          key={effect.id}
          className="click-effect"
          style={{
            left: `${effect.x}px`,
            top: `${effect.y}px`,
            fontSize: `${effect.size}px`
          }}
        >
          {effect.emoji}
          <span className="rizz-popup">+{effect.rizzBonus} RIZZ</span>
        </div>
      ))}

      {/* Click Combo Counter */}
      {!normalMode && clickCombo > 0 && (
        <div className="combo-counter">
          <div className="combo-number">{clickCombo}x</div>
          <div className="combo-label">COMBO!</div>
          {clickCombo >= 10 && <div className="combo-fire">🔥🔥🔥</div>}
          {clickCombo >= 25 && <div className="combo-godlike">GODLIKE! 👑</div>}
          {clickCombo >= 50 && <div className="combo-legendary">LEGENDARY! 💎</div>}
        </div>
      )}

      {!normalMode && <div className="stars">
        {stars.map(star => (
          <span 
            key={star.id} 
            className="star" 
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              fontSize: `${star.size}px`
            }}
          >{star.emoji}</span>
        ))}
      </div>}
      <div 
        className={`${normalMode ? 'container mt-4' : 'app-container'} ${normalMode ? '' : ''} ${discoMode ? 'disco-mode' : ''} ${sigmaMode ? 'sigma-mode' : ''} ${skibidiMode ? 'skibidi-mode' : ''} ${gooningSession ? 'gooning-mode' : ''} ${megaComboActive ? 'mega-combo-mode' : ''}`}
        onClick={normalMode ? undefined : handleInteractiveClick}
        style={{
          cursor: (!normalMode && (gooningSession || discoMode || skibidiMode || sigmaMode)) ? 'pointer' : 'default',
          transform: (!normalMode && shakeIntensity > 0) ? `translate(${Math.random() * shakeIntensity - shakeIntensity/2}px, ${Math.random() * shakeIntensity - shakeIntensity/2}px)` : 'none'
        }}
      >
        <h1 className={normalMode ? "mb-4" : "app-title"}>{normalMode ? 'System Zgłoszeń Serwisowych' : '✨ System Zgłoszeń ✨'}</h1>
        
        {/* Rizz Counter */}
        {!normalMode && <div className="rizz-counter">
          <span className="rizz-label">RIZZ POINTS:</span>
          <span className="rizz-value">{rizzPoints} 📈</span>
          {rizzPoints > 500 && <span className="rizz-emoji">🔥💯</span>}
          {rizzPoints > 1000 && <span className="rizz-emoji">👑 SIGMA</span>}
          {gooningHistory.length > 0 && (
            <button 
              className="history-toggle-btn"
              onClick={() => setShowHistory(!showHistory)}
              onMouseEnter={createParticles}
            >
              {showHistory ? '📊 HIDE STATS' : `📊 SESSIONS: ${gooningHistory.length}`}
            </button>
          )}
        </div>}
        
        {/* Disco Mode Toggle */}
        {!normalMode && <div style={{textAlign: 'center', marginBottom: '20px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <button 
            className="disco-btn" 
            onClick={() => setDiscoMode(!discoMode)}
            onMouseEnter={createParticles}
          >
            {discoMode ? '🪩 DISCO MODE ON! 🪩' : '🎵 Włącz Disco Mode 🎵'}
          </button>
          <button 
            className="sigma-btn" 
            onClick={() => {
              setSigmaMode(!sigmaMode);
              showBrainrotPhrase();
            }}
            onMouseEnter={createParticles}
          >
            {sigmaMode ? '😎 SIGMA ACTIVATED 💪' : '🗿 SIGMA GRINDSET 🗿'}
          </button>
          <button 
            className="skibidi-btn" 
            onClick={() => {
              setSkibidiMode(!skibidiMode);
              setRizzPoints(prev => prev + 500);
              showBrainrotPhrase();
              createConfetti();
            }}
            onMouseEnter={createParticles}
          >
            {skibidiMode ? '🚽 SKIBIDI TOILET! 🚽' : '🎭 SKIBIDI MODE 🎭'}
          </button>
          <button 
            className="gooning-btn" 
            onClick={() => {
              setGooningSession(!gooningSession);
              setRizzPoints(prev => prev + 300);
              showBrainrotPhrase();
              if (!gooningSession) createConfetti();
            }}
            onMouseEnter={createParticles}
          >
            {gooningSession ? '🤤 GOONING... 💦' : '🧠 START GOONING 🧠'}
          </button>
        </div>}
        
        {/* Gooning Session Timer */}
        {!normalMode && gooningSession && (
          <div className="gooning-timer">
            <div className="timer-label">GOONING SESSION ACTIVE</div>
            <div className="timer-value">
              {Math.floor(sessionTime / 60)}:{(sessionTime % 60).toString().padStart(2, '0')} ⏱️
            </div>
            <div className="timer-status">EDGING MAXING 💯 FR FR NO CAP</div>
            <div className="timer-rizz">
              +{sessionTime * 10} RIZZ POINTS EARNED 📈🔥
            </div>
            <div className="timer-hint">
              👆 CLICK ANYWHERE FOR COMBO! 👆
            </div>
          </div>
        )}

        {/* Gooning Session History */}
        {!normalMode && showHistory && gooningHistory.length > 0 && (
          <div className="gooning-history">
            <div className="history-header">
              <h3>🏆 GOONING SESSION HISTORY 🏆</h3>
              <button 
                className="history-clear-btn"
                onClick={() => {
                  setGooningHistory([]);
                  setShowHistory(false);
                  showBrainrotPhrase();
                }}
              >
                🗑️ CLEAR
              </button>
            </div>
            
            <div className="history-stats">
              <div className="stat-card">
                <div className="stat-label">TOTAL SESSIONS</div>
                <div className="stat-value">{gooningHistory.length}</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">LONGEST SESSION</div>
                <div className="stat-value">
                  {Math.floor(Math.max(...gooningHistory.map(s => s.duration)) / 60)}:{(Math.max(...gooningHistory.map(s => s.duration)) % 60).toString().padStart(2, '0')}
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label">TOTAL RIZZ EARNED</div>
                <div className="stat-value">{gooningHistory.reduce((sum, s) => sum + s.rizzEarned, 0)}</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">BEST COMBO</div>
                <div className="stat-value">{Math.max(...gooningHistory.map(s => s.combo))}x</div>
              </div>
            </div>

            <div className="history-list">
              {gooningHistory.map((session, index) => {
                const isLongest = session.duration === Math.max(...gooningHistory.map(s => s.duration));
                const isBestCombo = session.combo === Math.max(...gooningHistory.map(s => s.combo));
                return (
                  <div 
                    key={session.id} 
                    className={`history-item ${isLongest ? 'highlight-gold' : ''} ${isBestCombo ? 'highlight-purple' : ''}`}
                    onClick={() => {
                      setRizzPoints(prev => prev + 10);
                      createParticles({clientX: window.innerWidth/2, clientY: window.innerHeight/2, currentTarget: {getBoundingClientRect: () => ({left: 0, top: 0})}});
                    }}
                  >
                    <div className="history-item-rank">#{index + 1}</div>
                    <div className="history-item-details">
                      <div className="history-item-time">
                        ⏱️ {Math.floor(session.duration / 60)}:{(session.duration % 60).toString().padStart(2, '0')}
                      </div>
                      <div className="history-item-rizz">+{session.rizzEarned} RIZZ</div>
                      <div className="history-item-combo">🔥 {session.combo}x Combo</div>
                      <div className="history-item-date">{session.timestamp}</div>
                    </div>
                    {isLongest && <div className="badge badge-gold">👑 LONGEST</div>}
                    {isBestCombo && <div className="badge badge-purple">💜 BEST COMBO</div>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        <div className={normalMode ? "card mb-4" : "glass-card"} onMouseEnter={normalMode ? undefined : createParticles}>
          <div className={normalMode ? "card-header" : "card-title"}>Dodaj nowe zgłoszenie</div>
          <div className={normalMode ? "card-body" : ""}>
          <div className="mb-3">
            <label className="form-label">Klient</label>
            <input type="text" className="form-control" value={formClient} onChange={(e) => setFormClient(e.target.value)} placeholder="Wpisz nazwę klienta..." />
          </div>
          <div className="mb-3">
            <label className="form-label">Urządzenie</label>
            <input type="text" className="form-control" value={formDevice} onChange={(e) => setFormDevice(e.target.value)} placeholder="Wpisz urządzenie..." />
          </div>
          <div className="mb-3">
            <label className="form-label">Usterka</label>
            <input type="text" className="form-control" value={formIssue} onChange={(e) => setFormIssue(e.target.value)} placeholder="Opisz usterkę..." />
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select className="form-select" value={formStatus} onChange={(e) => setFormStatus(e.target.value)}>
              <option value="">Wybierz status</option>
              <option value="nowe">Nowe</option>
              <option value="w trakcie">W trakcie</option>
              <option value="zakończone">Zakończone</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Priorytet</label>
            <select className="form-select" value={formPriority} onChange={(e) => setFormPriority(e.target.value)}>
              <option value="">Wybierz priorytet</option>
              <option value="niski">Niski</option>
              <option value="średni">Średni</option>
              <option value="wysoki">Wysoki</option>
            </select>
          </div>
          {formError && <div className="alert alert-danger">{formError}</div>}
          <button className={normalMode ? "btn btn-primary" : "btn-magic"} onClick={AddNewSubmission}>Dodaj zgłoszenie</button>
          </div>
        </div>

        <div className={normalMode ? "mb-4" : "glass-card"} onMouseEnter={normalMode ? undefined : createParticles}>
          {normalMode ? <h5>Filtruj:</h5> : <div className="card-title">Filtruj zgłoszenia</div>}
          <div className={normalMode ? "" : "filter-section"}>
            <button className={normalMode ? "btn btn-outline-primary me-2" : "filter-btn new"} value={"nowe"} onClick={filterList} onMouseEnter={normalMode ? undefined : createParticles}>
              {!normalMode && '🌱 '}Nowe
            </button>
            <button className={normalMode ? "btn btn-outline-warning me-2" : "filter-btn in-progress"} value={"w trakcie"} onClick={filterList} onMouseEnter={normalMode ? undefined : createParticles}>
              {!normalMode && '⚡ '}W trakcie
            </button>
            <button className={normalMode ? "btn btn-outline-success me-2" : "filter-btn done"} value={"zakończone"} onClick={filterList} onMouseEnter={normalMode ? undefined : createParticles}>
              {!normalMode && '✅ '}Zakończone
            </button>
            <button className={normalMode ? "btn btn-outline-secondary" : "filter-btn all"} value={""} onClick={filterList} onMouseEnter={normalMode ? undefined : createParticles}>
              {!normalMode && '🌈 '}Wszystkie
            </button>
          </div>
        </div>

        {/* Random brainrot GIF przy liście zgłoszeń */}
        {!normalMode && submissions.length > 0 && (
          <div 
            className="floating-gif floating-gif-1"
            onClick={(e) => {
              e.stopPropagation();
              setRizzPoints(prev => prev + 50);
              showBrainrotPhrase();
            }}
            style={{cursor: 'pointer'}}
          >
            <img src={brainrotGifs[Math.floor(Math.random() * brainrotGifs.length)]} alt="vibe" />
          </div>
        )}

        <div className={normalMode ? "card mb-4" : "glass-card"}>
          <div className={normalMode ? "card-header" : "card-title"}>Lista zgłoszeń</div>
          <div className={normalMode ? "card-body" : ""}>
          <SubmissionsList></SubmissionsList>
          </div>
        </div>

        {/* Brainrot GIF przy podsumowaniu */}
        {!normalMode && submissions.length > 5 && (
          <div 
            className="floating-gif floating-gif-2"
            onClick={(e) => {
              e.stopPropagation();
              setRizzPoints(prev => prev + 75);
              createConfetti();
            }}
            style={{cursor: 'pointer'}}
          >
            <img src={brainrotGifs[(submissions.length + 2) % brainrotGifs.length]} alt="party" />
          </div>
        )}

        {/* Extra brainrot GIFs when RIZZ is high */}
        {!normalMode && rizzPoints > 500 && (
          <div 
            className="floating-gif floating-gif-3"
            onClick={(e) => {
              e.stopPropagation();
              setRizzPoints(prev => prev + 200);
              setSigmaMode(!sigmaMode);
            }}
            style={{cursor: 'pointer'}}
          >
            <img src={brainrotGifs[3]} alt="sigma" />
          </div>
        )}

        {!normalMode && rizzPoints > 1000 && (
          <>
            <div 
              className="floating-gif floating-gif-4"
              onClick={(e) => {
                e.stopPropagation();
                setRizzPoints(prev => prev + 500);
                setGooningSession(!gooningSession);
              }}
              style={{cursor: 'pointer'}}
            >
              <img src={brainrotGifs[5]} alt="gigachad" />
            </div>
            <div 
              className="ohio-banner"
              onDoubleClick={(e) => {
                e.stopPropagation();
                setRizzPoints(prev => prev + 1000);
                setClickCombo(50);
                setDiscoMode(true);
                setSkibidiMode(true);
                setSigmaMode(true);
                setGooningSession(true);
                showAchievement('💀 OHIO FINAL FORM UNLOCKED! 💀');
                createConfetti();
                setTimeout(() => createConfetti(), 300);
                setTimeout(() => createConfetti(), 600);
              }}
              style={{cursor: 'pointer'}}
            >
              ONLY IN OHIO 💀
            </div>
          </>
        )}

        <div className={normalMode ? "card" : "glass-card"}>
          <div className={normalMode ? "card-header" : "card-title"}>Podsumowanie</div>
          <div className={normalMode ? "card-body" : "summary-grid"}>
            <SubmissionCounter status="nowe"></SubmissionCounter>
            <SubmissionCounter status="w trakcie"></SubmissionCounter>
            <SubmissionCounter status="zakończone"></SubmissionCounter>
          </div>
        </div>
      </div>
    </>
  )
}

export default App