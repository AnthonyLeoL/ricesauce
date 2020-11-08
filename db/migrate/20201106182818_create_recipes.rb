class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name, null:false
      t.text :content, default: "slide to the left, slide to the right, everybody clap your hands"

      t.timestamps
    end
  end
end
