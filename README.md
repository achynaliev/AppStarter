# AppStarter

[Live Demo](https://apstarter.herokuapp.com/)

AppStarter is a clone of Kickstarter, a crowdfunding website where users can create projects and support projects that they like. AppStarter utilizes a React\Redux frontend, Ruby on Rails backend, and a PostgreSQL database. The app uses JS ES6, BCrypt for password salting and hashing, and Webpack for bundling.

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

![main](https://github.com/achynaliev/AppStarter/blob/master/wireframes/projectpage.png)

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
