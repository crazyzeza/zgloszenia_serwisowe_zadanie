function SubmissionsList(props) {
    let filteredSubmissions = props.submissions;
    //let unfilteredSumbissions = props.submissions; //there should be a better way to do that

    if (props.statusToFilterBy !== "") {
        filteredSubmissions = props.submissions.filter((submission) => submission.status === props.statusToFilterBy);
    }

    if (filteredSubmissions.length == 0) {
      return "Brak zgłoszeń do wyświetlenia";
    }
    return filteredSubmissions.map((submission) => (
      <div key={submission.id}>
        <p>Klient: {submission.klient}, Urządzenie: {submission.urzadzenie}, Usterka: {submission.usterka}, Status: {submission.status}, Priorytet: {submission.priorytet}</p>
      </div>
    ));
  }
export default SubmissionsList;