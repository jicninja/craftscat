<template>
  <div class="finish">
    <img src="images/player.png" />
    <h1>
      <div>Thanks for the opportunity!</div>
      I hope we can fit very well together!

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/castroignacio/" target="_blank"
            >LinkedIn</a
          >
        </li>
        <li>
          <a href="https://www.linkedin.com/in/castroignacio/" target="_blank"
            >Source Code</a
          >
        </li>

        <li><a href="./doc/IgnacioResume.pdf" target="_blank">Resume</a></li>
      </ul>
    </h1>
  </div>
</template>

<style scoped lang="scss">
.finish {
  padding-top: 8rem;
  text-align: center;
}

h1 {
  font-weight: 100;
  color: white;

  div {
    font-weight: 600;
  }
  ul {
    font-size: 1rem;
    margin-top: 2rem;
    list-style: none;
    padding: 0;
    li {
      display: inline-block;
      margin-right: 1rem;
    }
    a {
      color: white;
      text-decoration: none;
      &:hover {
        color: teal;
      }
    }
  }
}
</style>
