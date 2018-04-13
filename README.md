# AppStarter

[Live Demo](https://apstarter.herokuapp.com/)

AppStarter is a clone of Kickstarter, a crowdfunding website where users can create projects and support projects that they like. AppStarter utilizes a React\Redux frontend, Ruby on Rails backend, and a PostgreSQL database. The app uses JS ES6, BCrypt for password salting and hashing, and Webpack for bundling.

[AppStarter wiki](https://github.com/achynaliev/AppStarter/wiki)

## Technology

Built with ...
* Ruby on Rails and PostgreSQL on the backend

  <img src="https://user-images.githubusercontent.com/26920351/36052369-45a5788a-0da2-11e8-8058-8ef5c98c759c.jpeg" height="30">
  <img src="https://user-images.githubusercontent.com/26920351/36052411-766d6d88-0da2-11e8-8585-8fe14190f03b.png" width="30">  
* HTML, CSS, ReactJS/Redux and jQuery on the frontend

  <img src="https://user-images.githubusercontent.com/26920351/36052477-a6e7e416-0da2-11e8-813a-1ee556d4d8b0.png" width="30">  <img src="https://user-images.githubusercontent.com/26920351/36052488-b2fb00b2-0da2-11e8-995b-aeac3b9e68bb.png" height="30">  <img src="https://user-images.githubusercontent.com/26920351/36052718-a5709848-0da3-11e8-8a16-bf47966d3f63.png" width="25">  <img src="https://user-images.githubusercontent.com/26920351/36052733-b59ab8f2-0da3-11e8-941b-2afc80a4219e.png" width="25">  <img src="https://user-images.githubusercontent.com/26920351/36052738-c0aa4ed8-0da3-11e8-9497-aade7259fbfd.png" width="34">

## Features

  * User can create projects
  * Most popular projects based on number of Likes
  * Backings/Rewards
  * Secure frontend to backend user authentication using BCrypt.
  * Users can like projects
  * Search
  * Explore by categories

## Design and implementation

### Projects


On project show page, users can view details for a project. If users like the project they can like and back the project for a reward. Project show page provides detailed information about the project, video from project creator, current information on total amount of money project has raised, number of backers


![main](https://github.com/achynaliev/AppStarter/blob/master/wireframes/projectpage.png)

as you can see in the code snipper below projects has many relations with other components of AppStarter. Model level validations as well database level validations. All foreign keys in the database are indexed to increase performance.


```ruby
class Project < ApplicationRecord
  validates :title, :short_description, :full_description, :funding_goal,
            :funding_end_date, :user_id, presence: true

  belongs_to :user
  has_many :project_categories
  has_many :categories
  has_many :backings
  has_many :rewards
  has_many :likes
  has_many :likers

  def self.search_project(query)
    query = "%" + query.to_s.downcase + "%"
    search_result = Project.where('
      lower(title) LIKE ? or lower(short_description) LIKE ?', query, query)
  end

  #...
end

```

### Explore page

Users can explore projects by categories, each project will display some information. Users can like the project or can click on project and find more information on project show page

![explore](https://github.com/achynaliev/AppStarter/blob/master/wireframes/explorepage.png)

### Most popular projects

![explore](https://github.com/achynaliev/AppStarter/blob/master/wireframes/mostpopular.png)

On the main page of AppStarter users can view most popular projects based on number of likes.

## Future of AppStarter
