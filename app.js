class App extends React.Component {
  state = {
    incidents: [],
    borough: ''
  }

  setBorough = event => {
    this.setState(
      {
        borough: event.target.value
      },
      () => {
        this.fetchData()
      }
    )
  }

  // fetchData = () => {
  //   axios
  //     .get(
  //       `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?borough=${this.state.borough}&agency=NYPD`,
  //       {
  //         method: 'GET',
  //         data: {
  //           $limit: 10
  //         }
  //       },
  //       err => {
  //         console.log(err)
  //       }
  //     )
  //     .then(response => {
  //       this.setState({
  //         incidents: response.data
  //       })
  //     })
  // }
  fetchData = () => {
    fetch(
      `https://data.cityofnewyork.us/resource/fhrw-4uyv.json?borough=${this.state.borough}&agency=NYPD`,
      {
        method: 'GET',
        data: {
          $limit: 10
        }
      },
      err => {
        console.log(err)
      }
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          incidents: data
        })
      })
  }

  render = () => {
    return (
      <div>
        <h1>311 React Style</h1>
        <div>
          <button onClick={this.setBorough} value="MANHATTAN">
            MANHATTAN
          </button>
          <button onClick={this.setBorough} value="STATEN+ISLAND">
            STATEN ISLAND
          </button>
          <button onClick={this.setBorough} value="BROOKLYN">
            BROOKLYN
          </button>
          <button onClick={this.setBorough} value="QUEENS">
            QUEENS
          </button>
          <button onClick={this.setBorough} value="BRONX">
            BRONX
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.querySelector('main'))
